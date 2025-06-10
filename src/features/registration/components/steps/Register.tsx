'use client'

import { headingRecipes } from '@/features/chakra-ui/config/recipes'
import { Link } from '@chakra-ui/next-js'
import { Button, Heading, HStack, Switch, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { registrationStepsConfig } from '../../config/registrationStepsConfig'

const Register: React.FC = () => {
  return (
    <>
      <VStack
        w='full'
        maxWidth={{ base: 'full', md: 'container.sm' }}
        px={{ base: 4, md: 0 }}
        gap={{ base: 4 }}
        alignItems='start'
      >
        <Heading {...headingRecipes.H6}>Choose Your Race</Heading>
        <HStack w='full' rounded='lg' gap={4} alignItems='start'>
          <Button variant='outline'>Full Pint</Button>
          <Button variant='outline'>Half Pint</Button>
          <Button variant='outline'>Volunteer</Button>
        </HStack>
      </VStack>
      <VStack
        w='full'
        maxWidth={{ base: 'full', md: 'container.sm' }}
        px={{ base: 4, md: 0 }}
        gap={{ base: 4 }}
        alignItems='start'
      >
        <Heading {...headingRecipes.H6}>Shirt Size</Heading>
        <HStack
          w='full'
          rounded='lg'
          alignItems='start'
          justifyContent='flex-start'
        >
          {['XS', 'SM', 'MD', 'LG', 'XL'].map((size) => (
            <Button size='sm' variant='outline' key={size}>
              {size}
            </Button>
          ))}
        </HStack>
      </VStack>
      <VStack
        w='full'
        maxWidth={{ base: 'full', md: 'container.sm' }}
        px={{ base: 4, md: 0 }}
        gap={{ base: 4 }}
        alignItems='start'
      >
        <Heading {...headingRecipes.H6}>Other Info</Heading>
        <HStack
          w='full'
          rounded='lg'
          alignItems='start'
          justifyContent='flex-start'
        >
          <Text>...</Text>
        </HStack>
      </VStack>

      <VStack
        w='full'
        maxWidth={{ base: 'full', md: 'container.sm' }}
        px={{ base: 4, md: 0 }}
        gap={{ base: 4 }}
        alignItems='start'
      >
        <Heading {...headingRecipes.H6}>Rules</Heading>
        <HStack
          w='full'
          rounded='lg'
          alignItems='start'
          justifyContent='flex-start'
          gap={6}
        >
          <Switch />
          <Text>I have read the rules and agree to follow them.</Text>
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
          <Button
            as={Link}
            w='full'
            href={registrationStepsConfig.Waivers.path}
          >
            Continue
          </Button>
        </HStack>
      </VStack>
    </>
  )
}

export { Register }
