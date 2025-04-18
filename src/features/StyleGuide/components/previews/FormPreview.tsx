'use client'

import {
  Button,
  ButtonGroup,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react'
import React, { FormEvent } from 'react'
import { UiComponentPreview } from '../../config/uiSectionsConfig'

const FormPreview: React.FC = () => {
  return (
    <>
      <VStack
        alignItems='start'
        gap={6}
        as='form'
        w='full'
        onSubmit={(e: FormEvent) => e.preventDefault()}
      >
        <FormControl isRequired>
          <FormLabel>First name</FormLabel>
          <Input placeholder='Name' />
          <FormHelperText>What should I call you?</FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input placeholder='example@example.com' type='email' />
          <FormHelperText>What should I call you?</FormHelperText>
        </FormControl>
        <FormControl>
          <FormLabel>Race</FormLabel>
          <Select placeholder='Select country'>
            <option>Half Pint</option>
            <option>Full Pint</option>
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita maxime repudiandae praesentium culpa...' />
        </FormControl>
        <ButtonGroup>
          <Button type='reset' variant='outline'>
            Reset
          </Button>
          <Button type='submit'>Submit</Button>
        </ButtonGroup>
      </VStack>
    </>
  )
}

const formPreviewConfig: UiComponentPreview = {
  id: 'form',
  title: 'Forms',
  description:
    'Demo of form components using FormControl, FormLabel, FormHelperText and various inputs.',
  children: <FormPreview />,
}

export { formPreviewConfig }
