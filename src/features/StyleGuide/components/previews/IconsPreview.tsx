import { Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { UiComponentPreview } from '../../config/uiSectionsConfig'

const IconsPreview: React.FC = () => {
  return (
    <VStack alignItems='start' gap={8} w='full'>
      <Text>Custom Icons will be added here... </Text>
    </VStack>
  )
}

const iconsPreviewConfig: UiComponentPreview = {
  id: 'icons-preview',
  description: null,
  children: <IconsPreview />,
}

export { iconsPreviewConfig }
