'use client'

import { Button, ButtonProps, Icon } from '@chakra-ui/react'
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import React from 'react'
import * as Hero from 'react-icons/hi2'

const AuthLinks: React.FC<ButtonProps> = ({ ...buttonProps }) => {
  const pathname = usePathname()
  return (
    <>
      <SignedOut>
        <SignInButton
          signUpForceRedirectUrl='/account'
          fallbackRedirectUrl='/account'
        >
          <Button
            variant='outline'
            size='sm'
            leftIcon={<Icon as={Hero.HiUser} boxSize={4} />}
            rounded='full'
            aria-label='Sign In'
            pointerEvents={pathname === '/sign-in' ? 'none' : 'auto'}
            {...buttonProps}
          >
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton userProfileMode='navigation' userProfileUrl='/account' />
      </SignedIn>
    </>
  )
}

export { AuthLinks }
