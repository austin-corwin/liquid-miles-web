'use client'

import { Button, ButtonProps, Icon } from '@chakra-ui/react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import React from 'react'
import * as Hero from 'react-icons/hi2'

const AuthLinks: React.FC<ButtonProps> = ({ ...buttonProps }) => {
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
            {...buttonProps}
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
            {...buttonProps}
          >
            Account
          </Button>
        </UserButton>
      </SignedIn>
    </>
  )
}

export { AuthLinks }
