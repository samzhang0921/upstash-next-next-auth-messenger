'use client'
import { type } from 'os'
import React, { useEffect } from 'react'
import useSWR from 'swr'
import { Message } from '../../types/message'
import { clientPusher } from '../../utils/clientPusher'
import fetcher from '../../utils/fetchMessages'
import MessageComponent from './MessageComponent'

type PropsType = {
  initialMessages: Message[]
}

const MessageList = ({ initialMessages }: PropsType) => {

  const { data: messages, error, mutate } = useSWR('api/getMessages', fetcher)

  useEffect(() => {
    const channel = clientPusher.subscribe('messages')
    channel.bind('new-message',async (data:Message) => {
      if(!messages) return mutate(fetcher)
      
      if(messages?.find((message)=>message.id === data.id)) return

      mutate(fetcher,  {
        optimisticData: [data, ...messages!],
        rollbackOnError: true
      })
    })

    return ()=>{
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages, mutate, clientPusher])
  return (
    <div className='space-y-5 px-5 pt-8 pb-32 max-x-2xl xl:max-w-4xl mx-auto'>
       {(messages || initialMessages)?.map((message)=>(
       <MessageComponent key={message.id} message={message}/>
       ))}
    </div>
  )
}

export default MessageList