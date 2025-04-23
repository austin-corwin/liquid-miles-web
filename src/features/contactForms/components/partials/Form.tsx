'use client'

import { StackProps, VStack } from '@chakra-ui/react'
import React from 'react'

interface FormProps extends StackProps {
  id: string
}
/**
 * Form element and wrapper for form fields
 */
const Form: React.FC<FormProps> = ({ children, onSubmit }) => {
  return (
    <VStack as='form' alignItems='start' gap={6} w='full' onSubmit={onSubmit}>
      {children}
    </VStack>
  )
}

export { Form }
