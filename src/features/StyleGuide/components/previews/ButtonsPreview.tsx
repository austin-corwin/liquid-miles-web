'use client'

import { headingRecipes } from '@/features/chakra-ui/config/recipes'
import {
  Button,
  ButtonGroup,
  ButtonProps,
  Heading,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { UiComponentPreview } from '../../config/uiSectionsConfig'

const ButtonsPreview: React.FC = () => {
  const buttonVariants: ButtonProps['variant'][] = [
    'solid',
    'outline',
    'ghost',
    'link',
    'unstyled',
  ]
  const colorScheme: ButtonProps['colorScheme'][] = ['gray', 'yellow', 'teal']

  return (
    <>
      <VStack alignItems='start' gap={12}>
        <VStack alignItems='start' gap={4}>
          <Heading {...headingRecipes.H6} pb={4}>
            Variants
          </Heading>
          {buttonVariants.map((variant) => (
            <ButtonGroup key={String(variant)}>
              <Button variant={variant} textTransform='uppercase'>
                {String(variant)} Button
              </Button>
              <Button variant={variant} isActive>
                Active
              </Button>
              <Button variant={variant}>Active</Button>
              <Button variant={variant} disabled>
                Disabled
              </Button>
            </ButtonGroup>
          ))}
        </VStack>
        <VStack alignItems='start' gap={4}>
          <Heading {...headingRecipes.H6} pb={4}>
            Color Schemes
          </Heading>
          {colorScheme.map((colorScheme) => (
            <ButtonGroup key={String(colorScheme)}>
              <Button colorScheme={colorScheme} textTransform='uppercase'>
                {colorScheme} Button
              </Button>
              <Button colorScheme={colorScheme} isActive>
                Active
              </Button>
              <Button colorScheme={colorScheme} disabled>
                Disabled
              </Button>
            </ButtonGroup>
          ))}
        </VStack>
      </VStack>
    </>
  )
}

const buttonsPreviewConfig: UiComponentPreview = {
  id: 'buttons',
  title: 'Buttons',
  description: null,
  children: <ButtonsPreview />,
}

export { buttonsPreviewConfig }
