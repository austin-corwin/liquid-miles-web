'use client'

import { sleep } from '@/features/api/utils/sleep'
import React, { FormEvent } from 'react'
import { TextField } from '../fields/TextField'
import { Form } from '../partials/Form'
import { FormControls } from '../partials/FormControls'

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = React.useState<boolean>(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await sleep(1000)
    console.log('form submitted', e)
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
        helperText={'What should we call you?'}
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
