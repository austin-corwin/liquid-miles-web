'use client'

import { headingRecipes } from '@/features/chakra-ui/config/recipes'
import { textRecipes } from '@/features/chakra-ui/config/recipes/textRecipes'
import {
  Box,
  Card,
  CardHeader,
  CardProps,
  Divider,
  Heading,
  HStack,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react'
import { SignedIn, SignedOut, SignUp } from '@clerk/nextjs'
import React from 'react'

import { FaHandsHelping } from 'react-icons/fa'
import { IoMdPint } from 'react-icons/io'
import { IconType } from 'react-icons/lib'
import { PiPintGlassFill } from 'react-icons/pi'
import { CurrentUser } from './CurrentUser'

interface RegisterProps {
  slug?: string
}
interface RaceOption {
  id: string
  label: string
  description: string
  cost?: number
  icon: IconType
}

const raceOptions: RaceOption[] = [
  {
    id: 'full-pint',
    label: 'Full Pint',
    description: '10 Miles, 10 beers and all the glory.',
    cost: 30,
    icon: PiPintGlassFill,
  },
  {
    id: 'half-pint',
    label: 'Half Pint',
    description: '5 miles, 5 beers; half as long and twice as fast!',
    cost: 20,
    icon: IoMdPint,
  },
  {
    id: 'volunteer',
    label: 'Volunteer',
    description: 'Help the fools running the race -- be a hero with a whistle.',
    cost: 20,
    icon: FaHandsHelping,
  },
]

const Register: React.FC<RegisterProps> = ({}) => {
  const [selectedRace, setSelectedRace] = React.useState<string>(null)
  const chooseRace = (race: string) => {
    console.log('race chosen', race)
    setSelectedRace(race)
  }
  const activeCardRecipe: CardProps = {
    bg: 'gray.200',
    color: 'black',
  }
  return (
    <VStack w='full' gap={4} p={{ base: 4, md: 10 }}>
      <Box as='header'>
        <Heading {...headingRecipes.H3}>Register for Liquid Miles</Heading>
      </Box>
      <Divider />

      <SignedIn>
        <VStack
          w='full'
          maxWidth={{ base: 'full', md: 'container.sm' }}
          px={{ base: 4, md: 0 }}
          gap={{ base: 6, md: 10 }}
        >
          <VStack w='full' px={6} py={4} rounded='lg' bg='gray.100'>
            <CurrentUser />
          </VStack>
          <Heading {...headingRecipes.H6}>Choose Your Race</Heading>
          <VStack w='full' px={6} py={4} rounded='lg' gap={4}>
            {raceOptions.map((option) => {
              const cardProps =
                selectedRace === option.id ? activeCardRecipe : {}
              return (
                <Card
                  key={option.id}
                  size='md'
                  w='full'
                  colorScheme={'dark'}
                  rounded='lg'
                  cursor='pointer'
                  onClick={() => chooseRace(option.id)}
                  {...cardProps}
                >
                  <CardHeader>
                    <HStack alignItems='center' gap={4}>
                      <Icon
                        as={option.icon}
                        boxSize={10}
                        rounded='full'
                        p={2}
                      />

                      <VStack
                        alignItems='flex-start'
                        justifyContent='flex-start'
                        w='full'
                        gap={1}
                      >
                        <Heading {...headingRecipes.H6}>{option.label}</Heading>
                        <Text {...textRecipes.FinePrint}>
                          {option.description}
                        </Text>
                      </VStack>
                    </HStack>
                  </CardHeader>
                </Card>
              )
            })}
          </VStack>
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
          />
        </VStack>
      </SignedOut>
    </VStack>
  )
}

export { Register }
