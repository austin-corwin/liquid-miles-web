'use client'

import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

interface ChakraUiProvider {
	children: React.ReactNode
}

const ChakraUiProvider: React.FC<ChakraUiProvider> = ({ children }) => {
	return <ChakraProvider>{children}</ChakraProvider>
}

export { ChakraUiProvider }
