'use client'

import { inputRecipes } from '@/features/chakra-ui/config/recipes/inputRecipes'
import {
  Button,
  ButtonGroup,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import React, { FormEvent } from 'react'

const simulateSubmission = async (ms: number = 500) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await simulateSubmission(1000)
    console.log('form submitted')
    setIsSubmitting(false)
  }

  return (
    <VStack
      alignItems='start'
      gap={6}
      as='form'
      w='full'
      onSubmit={handleSubmit}
    >
      <FormControl isRequired isReadOnly={isSubmitting}>
        <FormLabel>Name</FormLabel>
        <Input placeholder='Name' {...inputRecipes.Default} />
        <FormHelperText>What should I call you?</FormHelperText>
      </FormControl>
      <FormControl isRequired isReadOnly={isSubmitting}>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder='you.re@aweso.me'
          type='email'
          {...inputRecipes.Default}
        />
      </FormControl>
      <FormControl isReadOnly={isSubmitting}>
        <FormLabel>Message</FormLabel>
        <Textarea
          placeholder={`Let us know what's on your mind`}
          {...inputRecipes.Default}
        />
      </FormControl>
      <ButtonGroup isDisabled={isSubmitting}>
        <Button
          type='submit'
          isLoading={isSubmitting}
          loadingText='Sending'
          minW={40}
        >
          Send It
        </Button>
      </ButtonGroup>
    </VStack>
  )
}

export { ContactForm }
