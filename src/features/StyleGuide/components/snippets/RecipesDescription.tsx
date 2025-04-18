'use client'
import { textRecipes } from '@/features/chakra-ui/config/recipes/textRecipes'
import { Text, VStack } from '@chakra-ui/react'
import React from 'react'

const RecipesDescription: React.FC = () => {
  return (
    <VStack alignItems='start' justifyContent='start' gap={4} w='full'>
      <Text {...textRecipes.Lead} py={4}>
        Recipes are Typesafe, token-aware, stackable compositions of Chakra
        component props that improve consistency and efficiency.
      </Text>
      <Text {...textRecipes.Body} maxW='prose'>
        They fill the gap between the built-in Chakra theme tools and custom
        components by providing re-usable property composition you cannot
        acheive through variants and component configs alone. Think about them
        like micro-components.
      </Text>
      <Text {...textRecipes.FinePrint} maxW='prose'>
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

export { RecipesDescription }
