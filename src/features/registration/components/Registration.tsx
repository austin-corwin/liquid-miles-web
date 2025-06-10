'use client'

import { headingRecipes } from '@/features/chakra-ui/config/recipes'
import { Box, Heading, VStack } from '@chakra-ui/react'
import { SignedIn, SignedOut, SignUp } from '@clerk/nextjs'
import React from 'react'

import { usePathname } from 'next/navigation'
import {
  RegistrationStep,
  registrationStepsConfig,
} from '../config/registrationStepsConfig'
import { CurrentUser } from './CurrentUser'
import { RegistrationProgress } from './RegistrationProgress'

const Registration: React.FC = () => {
  const year = new Date().getFullYear()
  const pathname = usePathname()
  const [currentStep, setCurrentStep] = React.useState<RegistrationStep>(null)
  React.useEffect(() => {
    if (pathname) {
      setCurrentStep(
        Object.values(registrationStepsConfig).find(
          (item) => item.path === pathname
        )
      )
    }
  }, [pathname])

  return (
    <VStack w='full' gap={4} p={{ base: 4, md: 10 }}>
      <VStack as='header' flexDirection={'column-reverse'}>
        <Heading {...headingRecipes.H2} textTransform='uppercase' as='h1'>
          Register
        </Heading>
        <Heading {...headingRecipes.H6} as='h2'>
          Liquid Miles {year}
        </Heading>
      </VStack>

      <SignedIn>
        <VStack
          w='full'
          maxWidth={{ base: 'full', md: 'container.sm' }}
          px={{ base: 4, md: 0 }}
          gap={{ base: 6, md: 10 }}
        >
          <RegistrationProgress currentStep={1} />

          <VStack
            w='full'
            px={8}
            py={6}
            rounded='lg'
            bg='slate.100'
            shadow='lg'
          >
            <CurrentUser />
          </VStack>
          {currentStep && <Box as={currentStep?.render} />}
        </VStack>
      </SignedIn>
      <SignedOut>
        <VStack w='full'>
          <Heading {...headingRecipes.H6}>
            Create an account to get started
          </Heading>
          <SignUp
            fallbackRedirectUrl='/register'
            signInForceRedirectUrl='/register'
            signInUrl='/sign-in?redirect_url=/register'
          />
        </VStack>
      </SignedOut>
    </VStack>
  )
}

export { Registration }
