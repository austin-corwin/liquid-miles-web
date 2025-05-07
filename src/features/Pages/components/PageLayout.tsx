'use client'

import { Box, BoxProps, VStack } from '@chakra-ui/react'
import React from 'react'

const PageLayout: React.FC<BoxProps> = ({ children, ...boxProps }) => {
  return (
    <Box w='full' bg='secondary' {...boxProps}>
      <VStack
        w='full'
        maxWidth='container.xl'
        alignItems='center'
        py={16}
        px={{ base: 6 }}
        mx='auto'
      >
        {children}
      </VStack>
    </Box>
  )
}

export { PageLayout }
