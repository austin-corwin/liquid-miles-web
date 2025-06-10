'use client'

import { headingRecipes } from '@/features/chakra-ui/config/recipes'
import { Link } from '@chakra-ui/next-js'
import { Button, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { registrationStepsConfig } from '../../config/registrationStepsConfig'

const Payment: React.FC = () => {
  return (
    <>
      <VStack
        w='full'
        maxWidth={{ base: 'full', md: 'container.sm' }}
        px={{ base: 4, md: 0 }}
        gap={{ base: 4 }}
        alignItems='start'
      >
        <Heading {...headingRecipes.H6}>Pay</Heading>
        <Text>Payment handled here.</Text>
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
          <Button
            as={Link}
            w='full'
            href={registrationStepsConfig.Confirmation.path}
          >
            Confirm Payment
          </Button>
        </HStack>
      </VStack>
    </>
  )
}

export { Payment }
