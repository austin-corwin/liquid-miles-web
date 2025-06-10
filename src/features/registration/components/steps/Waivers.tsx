'use client'

import { headingRecipes } from '@/features/chakra-ui/config/recipes'
import { Link } from '@chakra-ui/next-js'
import { Button, Heading, HStack, Switch, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { registrationStepsConfig } from '../../config/registrationStepsConfig'

const Waivers: React.FC = () => {
  return (
    <>
      <VStack
        w='full'
        maxWidth={{ base: 'full', md: 'container.sm' }}
        px={{ base: 4, md: 0 }}
        gap={{ base: 4 }}
        alignItems='start'
      >
        <Heading {...headingRecipes.H6}>Sign Digital Waiver</Heading>
        <Text>
          Sign waivers ahead of time with a simple form field or drop-in
          integration.
        </Text>

        <HStack
          w='full'
          rounded='lg'
          alignItems='start'
          justifyContent='flex-start'
          gap={6}
        >
          <Switch />
          <Text>I have read and agree to the terms...</Text>
        </HStack>
      </VStack>
      <VStack
        w='full'
        maxWidth={{ base: 'full', md: 'container.sm' }}
        px={{ base: 4, md: 0 }}
        gap={{ base: 4 }}
        alignItems='start'
      >
        <HStack
          w='full'
          rounded='lg'
          alignItems='start'
          justifyContent='center'
        >
          <Button as={Link} w='full' href={registrationStepsConfig.Pay.path}>
            Continue
          </Button>
        </HStack>
      </VStack>
    </>
  )
}

export { Waivers }
