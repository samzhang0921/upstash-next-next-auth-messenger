'use client'
import React from 'react'
import ChatInput from '../components/main/ChatInput'
import MessageList from '../components/main/MessageList'

const Home = async () => {
  const data = await fetch(`${process.env.VERCEL_URL || 'http://localhost:3000'}/api/getMessages`).then((res) => res.json())
  const { messages } = data
  return (
      <main>
        <MessageList initialMessages={messages} />
        <ChatInput />
      </main>
  )
}

export default Home