import { getServerSession } from 'next-auth'
import React from 'react'
import ChatInput from '../components/main/ChatInput'
import MessageList from '../components/main/MessageList'
import { Providers } from './providers'

const Home = async () => {
  const session = await getServerSession()
  const data = await fetch(`${process.env.VERCEL_URL || 'http://localhost:3000'}/api/getMessages`).then((res) => res.json())
  const { messages } = data
  return (
    <Providers session={session}>
      <main>
        <MessageList initialMessages={messages} />
        <ChatInput />
      </main>
    </Providers>
  )
}

export default Home