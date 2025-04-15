'use client'

import { Badge, Heading } from '@chakra-ui/react'
import React from 'react'
import { UiComponentPreview } from '../../config/uiSectionsConfig'

const HeadingsPreview: React.FC = () => {
  return (
    <>
      <Heading size='3xl'>
        Heading <Badge size='sm'>3xl</Badge>
      </Heading>
      <Heading size='2xl'>
        Heading <Badge size='sm'>2xl</Badge>
      </Heading>
      <Heading size='xl'>
        Heading <Badge size='sm'>xl</Badge>
      </Heading>
      <Heading size='lg'>
        Heading <Badge size='sm'>lg</Badge>
      </Heading>
      <Heading size='md'>
        Heading <Badge size='sm'>md</Badge>
      </Heading>
      <Heading size='sm'>
        Heading <Badge size='sm'>sm</Badge>
      </Heading>
      <Heading size='xs'>
        Heading <Badge size='sm'>xs</Badge>
      </Heading>
    </>
  )
}

const headingsPreviewConfig: UiComponentPreview = {
  id: 'headings',
  title: 'Headings',
  description: null,
  children: <HeadingsPreview />,
}

export { headingsPreviewConfig }
