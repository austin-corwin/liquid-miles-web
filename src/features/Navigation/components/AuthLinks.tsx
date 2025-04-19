'use client'

import { Link } from '@chakra-ui/react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'

interface AuthLinksProps {
  children?: React.ReactNode
}

const AuthLinks: React.FC<AuthLinksProps> = ({ children }) => {
  return (
    <>
      <SignedIn>
        <Link
          href='/auth/tickets'
          className='font-primary font-extrabold hover:text-white duration-300 transition-all ease-in-out'
        >
          Tickets
        </Link>
      </SignedIn>
      <div className='font-primary font-bold border-2 border-black p-2 rounded-xl hover:text-white hover:border-white'>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      {children}
    </>
  )
}

export { AuthLinks }
