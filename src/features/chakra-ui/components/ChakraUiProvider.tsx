'use client'

import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { chakraTheme } from '../config/chakraTheme'
import { toastOptions } from '../config/toastOptions'

interface ChakraUiProvider {
  children: React.ReactNode
}

const ChakraUiProvider: React.FC<ChakraUiProvider> = ({ children }) => {
  return (
    <ChakraProvider theme={chakraTheme} toastOptions={toastOptions}>
      {children}
    </ChakraProvider>
  )
}

export { ChakraUiProvider }
