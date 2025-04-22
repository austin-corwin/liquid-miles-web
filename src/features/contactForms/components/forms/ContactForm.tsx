'use client'

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

const ContactForm: React.FC = () => {
  return (
    <VStack
      alignItems='start'
      gap={6}
      as='form'
      w='full'
      onSubmit={(e: FormEvent) => e.preventDefault()}
    >
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input placeholder='Name' />
        <FormHelperText>What should I call you?</FormHelperText>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input placeholder='example@example.com' type='email' />
      </FormControl>
      <FormControl>
        <FormLabel>Message</FormLabel>
        <Textarea placeholder={`Let us know what's on your mind`} />
      </FormControl>
      <ButtonGroup>
        <Button type='reset' variant='outline'>
          Clear
        </Button>
        <Button type='submit'>Send It</Button>
      </ButtonGroup>
    </VStack>
  )
}

export { ContactForm }
