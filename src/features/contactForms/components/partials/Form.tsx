'use client'

import { StackProps, VStack } from '@chakra-ui/react'
import React, { FormEventHandler } from 'react'

interface FormProps extends StackProps {
  id: string
  onSubmit: FormEventHandler
}
/**
 * Form element and wrapper for form fields
 */
const Form: React.FC<FormProps> = ({ children, onSubmit, ...stackProps }) => {
  return (
    <VStack
      as='form'
      alignItems='start'
      gap={6}
      w='full'
      onSubmit={onSubmit}
      {...stackProps}
    >
      {children}
    </VStack>
  )
}

export { Form }
