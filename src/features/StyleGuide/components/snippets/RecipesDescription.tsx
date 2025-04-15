'use client'
import { textRecipes } from '@/features/chakra-ui/config/recipes/textRecipes'
import { Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const RecipesDescription: React.FC = () => {
  return (
    <VStack alignItems='start' justifyContent='start' gap={4} w='full'>
      <Text {...textRecipes.Lead} width='full'>
        Recipes are Typesafe, token-aware, stackable compositions of Chakra
        component props that improve consistency and efficiency.
      </Text>
      <Text {...textRecipes.Body} width='full'>
        They fill the gap between the built-in Chakra theme tools and custom
        components by providing re-usable property composition you cannot
        acheive through variants and component configs alone. Think about them
        like micro-components.
      </Text>
      <Text {...textRecipes.FinePrint}>
        This feature is modeled on the{' '}
        <a
          href='https://www.chakra-ui.com/docs/theming/recipes'
          target='_blank'
        >
          Chakra UI 3.x Theme Recipes
        </a>{' '}
        concept, but modified to work with version 2.x.
      </Text>
    </VStack>
  )
}

const Asd: React.FC = () => {
  const handleCopyToClipBoard = (): void => null
  return (
    <>
      <Heading
        as='h2'
        size='3xl'
        mb={4}
        maxW='prose'
        textDecoration='underline'
        onClick={handleCopyToClipBoard}
      >
        Heading with anchor link
      </Heading>
      <Text fontSize='xl' fontWeight='medium'>
        Lorem, ipsum dolor...
      </Text>

      <Heading as='h3' size='xl' mb={2} textTransform='uppercase'>
        Sub Heading A
      </Heading>
      <Text fontSize='md' fontWeight='normal'>
        Lorem, ipsum dolor...
      </Text>
      <Heading as='h3' size='xl' mb={2} textTransform='uppercase'>
        Sub Heading B
      </Heading>
      <Text fontSize='md' fontWeight='normal'>
        Lorem, ipsum dolor...
      </Text>
    </>
  )
}

export { Asd, RecipesDescription }
