'use client'

import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { chakraTheme } from '../config/chakraTheme'

interface ChakraUiProvider {
  children: React.ReactNode
}

const ChakraUiProvider: React.FC<ChakraUiProvider> = ({ children }) => {
  return <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
}

export { ChakraUiProvider }
