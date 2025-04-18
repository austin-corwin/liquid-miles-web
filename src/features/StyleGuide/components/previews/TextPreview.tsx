'use client'

import { headingRecipes } from '@/features/chakra-ui/config/recipes'
import { textRecipes } from '@/features/chakra-ui/config/recipes/textRecipes'
import { Divider, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { UiComponentPreview } from '../../config/uiSectionsConfig'

const TextPreview: React.FC = () => {
  return (
    <VStack w='full' alignItems='start' justifyContent='start' gap={10}>
      <VStack w='fit-content' alignItems='start' justifyContent='start' gap={4}>
        {Object.entries(headingRecipes).map(([name, recipe]) => {
          return (
            <Heading key={name} id={name} {...recipe}>
              {name} Recipe
            </Heading>
          )
        })}
      </VStack>
      <Divider maxWidth='prose' />
      <VStack w='fit-content' alignItems='start' justifyContent='start' gap={4}>
        {Object.entries(textRecipes).map(([name, recipe]) => {
          return (
            <Text key={name} {...recipe}>
              {name} recipe ...lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Expedita maxime repudiandae praesentium culpa
              repellat magni modi nobis quisquam quo, pariatur perspiciatis
              error nulla ipsam <a href='#'>quas voluptas</a> molestias. Ab,
              nulla? Repudiandae.
            </Text>
          )
        })}
      </VStack>
    </VStack>
  )
}

const TextPreviewConfig: UiComponentPreview = {
  id: 'text-recipes',
  title: 'Text Recipes',
  description: 'Common patterns for heading and body text.',
  children: <TextPreview />,
}

export { TextPreviewConfig }
