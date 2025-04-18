import { HStack, VStack } from '@chakra-ui/react'
import React from 'react'
import { UiComponentPreview } from '../../config/uiSectionsConfig'
import { ColorSwatch } from '../ColorSwatch'

const ColorsPreview: React.FC = () => {
  return (
    <VStack alignItems='start' gap={8} w='full'>
      <HStack flexWrap={'wrap'} gap={8} w='full'>
        <ColorSwatch color='primary' size='lg' />
        <ColorSwatch color='secondary' size='lg' />
        <ColorSwatch color='tertiary' size='lg' />
      </HStack>
      <HStack flexWrap={'wrap'} gap={4} w='full'>
        <ColorSwatch color='warning' />
        <ColorSwatch color='error' />
        <ColorSwatch color='black' />
        <ColorSwatch color='white' />
      </HStack>
    </VStack>
  )
}

const colorsPreviewConfig: UiComponentPreview = {
  id: 'colors',
  title: 'Colors',
  description: 'Primary and secondary UI pallet. ',
  children: <ColorsPreview />,
}

export { colorsPreviewConfig }
