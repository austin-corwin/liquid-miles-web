'use client'

import { Button, ButtonGroup, ButtonProps, VStack } from '@chakra-ui/react'
import React from 'react'
import { UiComponentPreview } from '../../config/uiSectionsConfig'

const ButtonsPreview: React.FC = () => {
  const buttonVariants: ButtonProps['variant'] = [
    'solid',
    'outline',
    'ghost',
    'link',
    'unstyled',
  ]

  return (
    <>
      <VStack>
        {buttonVariants.map((variant) => (
          <ButtonGroup key={variant}>
            <Button variant={variant}> Solid Button </Button>
            <Button variant={variant} disabled>
              Disabled
            </Button>
          </ButtonGroup>
        ))}
      </VStack>
      <ButtonGroup>
        <Button variant='solid'> Solid Button </Button>
        <Button variant='solid' disabled>
          Disabled
        </Button>
      </ButtonGroup>
      <Button variant='outline'> Outline Button </Button>
      <Button variant='ghost'> Ghost Button </Button>
      <Button variant='link'> Link Button </Button>
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
