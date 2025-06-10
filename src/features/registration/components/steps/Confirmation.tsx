'use client'

import { headingRecipes } from '@/features/chakra-ui/config/recipes'
import { Link } from '@chakra-ui/next-js'
import { Button, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Confirmation: React.FC = () => {
  return (
    <>
      <VStack
        w='full'
        maxWidth={{ base: 'full', md: 'container.sm' }}
        px={{ base: 4, md: 0 }}
        gap={{ base: 4 }}
        alignItems='start'
      >
        <Heading {...headingRecipes.H6}>Registration Complete</Heading>
        <Text>You&#39;re all done! See you at the race.</Text>
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
          <Button as={Link} w='full' href='/account'>
            Go to Account
          </Button>
        </HStack>
      </VStack>
    </>
  )
}

export { Confirmation }
