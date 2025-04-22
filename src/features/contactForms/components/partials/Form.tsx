'use client'

import { StackProps, VStack } from '@chakra-ui/react'
import React from 'react'

interface FormProps extends StackProps {
  id: string
}

const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <VStack alignItems='start' gap={6} as='form' w='full' onSubmit={onSubmit}>
      {children}
    </VStack>
  )
}

export { Form }
