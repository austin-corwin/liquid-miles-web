'use client'

import { Button, Icon } from '@chakra-ui/react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import * as Hero from 'react-icons/hi2'

const AuthLinks: React.FC = () => {
  return (
    <>
      <SignedOut>
        <SignInButton>
          <Button
            variant='outline'
            size='sm'
            leftIcon={<Icon as={Hero.HiUser} boxSize={4} />}
            rounded='full'
            aria-label='Sign In'
          >
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton>
          <Button
            variant='outline'
            size='sm'
            leftIcon={<Icon as={Hero.HiUserCircle} />}
          >
            Account
          </Button>
        </UserButton>
      </SignedIn>
    </>
  )
}

export { AuthLinks }
