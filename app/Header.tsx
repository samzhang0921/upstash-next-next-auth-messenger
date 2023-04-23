
'use client'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LogoutButton from '../components/header/LogoutButton'
import { useSession } from 'next-auth/react'

const Header = () => {
    const { data: session } = useSession()
    if (session)
        return (
            <header className='sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm'>
                <div className='flex space-x-2 items-center'>
                    <Image className='rounded-full mx-2 object-contain' src={session?.user?.image!} alt='profile picture' height={10} width={50} />
                    <div>
                        <p className='text-blue-400'>Logged in as:</p>
                        <p className='font-bold text-lg'>{session?.user?.name}</p>
                    </div>
                </div>
                <LogoutButton />
            </header>
        )
    return (
        <header className='sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm'>
            <div className='flex flex-col items-center space-y-5'>
                <div className='flex space-x-2 items-center'>
                    <Image src='https://links.papareact.com/jne' alt='logo' height={10} width={50} />
                    <p className='text-blue-400'>Welcome to Meta Messenger</p>
                </div>
                <Link href='/auth/signin'
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                >Sign In</Link>
            </div>
        </header>
    )
}

export default Header