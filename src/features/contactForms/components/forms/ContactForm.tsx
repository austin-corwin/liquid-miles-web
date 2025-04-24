'use client'

import { sleep } from '@/features/api/utils/sleep'
import { toastRecipes } from '@/features/chakra-ui/config/recipes/toastRecipes'
import { useToast } from '@chakra-ui/react'
import { useFormik } from 'formik'
import React from 'react'
import { TextField } from '../fields/TextField'
import { Form } from '../partials/Form'
import { FormControls } from '../partials/FormControls'

interface ContactFormValues {
  name: string
  email: string
  message: string
}

const ContactForm: React.FC = () => {
  const toast = useToast()
  const handleSubmit = async (values: ContactFormValues) => {
    formik.setSubmitting(true)
    console.log('form submitted', values)
    const firstName = values?.name?.split(' ').shift()
    await sleep(1000)
    toast({
      title: 'Message Sent!',
      description: `We'll be in touch soon, ${firstName}!`,
      ...toastRecipes.success,
    })
  }

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: async (values: ContactFormValues) => {
      await handleSubmit(values)
    },
    validateOnBlur: true,
  })

  return (
    <Form id='contact-form' onSubmit={formik.handleSubmit}>
      <TextField
        id='name'
        label='Name'
        fieldType='text'
        isRequired
        isReadOnly={formik.isSubmitting}
        helperText={'What should we call you?'}
        inputProps={{
          value: formik.values.name,
          onChange: formik.handleChange,
          onBlur: formik.handleBlur,
        }}
      />
      <TextField
        id='email'
        label='Email'
        fieldType='email'
        isRequired
        isReadOnly={formik.isSubmitting}
        inputProps={{
          value: formik.values.email,
          onChange: formik.handleChange,
          onBlur: formik.handleBlur,
        }}
      />
      <TextField
        id='message'
        label='Message'
        fieldType='textarea'
        isReadOnly={formik.isSubmitting}
        inputProps={{
          value: formik.values.message,
          onChange: formik.handleChange,
          onBlur: formik.handleBlur,
        }}
      />
      <FormControls
        isLoading={formik.isSubmitting}
        submitLabel='Send It'
        loadingText='Sending'
      />
    </Form>
  )
}

export { ContactForm }
