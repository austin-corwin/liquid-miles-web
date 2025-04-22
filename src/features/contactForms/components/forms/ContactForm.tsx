'use client'

import React, { FormEvent } from 'react'
import { TextField } from '../fields/TextField'
import { Form } from '../partials/Form'
import { FormControls } from '../partials/FormControls'

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
    <Form id='contact-form' onSubmit={handleSubmit}>
      <TextField
        id='name'
        label='Name'
        fieldType='text'
        isRequired
        isReadOnly={isSubmitting}
        // simulations
        // helperText={'What should we call you?'}
        // error={'This is not a real name'}
      />
      <TextField
        id='email'
        label='Email'
        fieldType='email'
        isRequired
        isReadOnly={isSubmitting}
      />
      <TextField
        id='message'
        label='Message'
        fieldType='textarea'
        isReadOnly={isSubmitting}
      />
      <FormControls
        isLoading={isSubmitting}
        submitLabel='Send It'
        loadingText='Sending'
      />
    </Form>
  )
}

export { ContactForm }
