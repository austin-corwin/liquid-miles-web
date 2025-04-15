'use client'

import { headingRecipes } from '@/features/chakra-ui/config/recipes'
import { textRecipes } from '@/features/chakra-ui/config/recipes/textRecipes'
import { Code, Heading, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { UiComponentPreview } from '../../config/uiSectionsConfig'

const RecipeExamplesPreview: React.FC = () => {
  return (
    <VStack gap={8}>
      <VStack gap={2} alignItems={'start'} justifyContent={'start'} w='full'>
        <Heading {...headingRecipes.H6}>Without Recipes</Heading>
        <Text {...textRecipes.Compact}>
          Properties are set explicitly and repeated providing flexibility, but
          also room for error and bloat.
        </Text>
        <Code px={4} my={4} rounded='lg' colorScheme='gray'>
          <pre>{`
<Heading
  as='h2'
  size='3xl'
  mb={4}
  maxW='prose'
  textDecoration='underline'
  onClick={handleCopyToClipBoard}
  _after={{
	content: '"#"',
	position: 'absolute',
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	h: 'full',
	fontSize: 'xl',
	right: 0,
	opacity: 0,
	trasition: CSSTransition.EaseIn200,
  }},
  _hover={{
	_after: {
	opacity: 0.8,
	}
  }}
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
  Heading B
</Heading>
<Text fontSize='md' fontWeight='normal' color='red.500'>
  Lorem, ipsum dolor...
</Text>

`}</pre>
        </Code>
      </VStack>
      <VStack gap={2} alignItems={'start'} justifyContent={'start'} w='full'>
        <Heading {...headingRecipes.H6}>With Recipes</Heading>
        <Text {...textRecipes.Compact}>
          Recipes are spread on the compoent for which they are intended and can
          be combined with other recipes or native component props as-needed.
        </Text>
        <Code px={4} my={4} rounded='lg' colorScheme='blue'>
          <pre>{`
<Heading {...headingRecipes.H3} {...headingRecipes.Ancor}>
	Heading with anchor link
</Heading>
<Text {...textRecipes.Lead}>
  Lorem, ipsum dolor...
</Text>

<Heading {...headingRecipes.H4}>
  Sub Heading A
</Heading>
<Text {...textRecipes.Body}>
  Lorem, ipsum dolor...
</Text>
<Heading {...headingRecipes.H3}>
  Heading B
</Heading>
<Text {...textRecipes.Body} color='red.500'>
  Lorem, ipsum dolor...
</Text>

`}</pre>
        </Code>
        <Text>
          For sample recipe config files check the contents of{' '}
          <Code>src/features/chakra-ui/config/recipes/</Code>
        </Text>
      </VStack>
    </VStack>
  )
}

const recipeExamplesPreviewConfig: UiComponentPreview = {
  id: 'recipe-example',
  title: 'Examples',
  description: null,
  children: <RecipeExamplesPreview />,
}

export { recipeExamplesPreviewConfig }
