'use client'

import { sleep } from '@/features/api/utils/sleep'
import { toastRecipes } from '@/features/chakra-ui/config/recipes/toastRecipes'
import { useToast } from '@chakra-ui/react'
import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import { TextField } from '../fields/TextField'
import { Form } from '../partials/Form'
import { FormControls } from '../partials/FormControls'

interface ContactFormValues {
  name: string
  email: string
  message: string
}

const validationSchema: yup.ObjectSchema<ContactFormValues> = yup
  .object()
  .shape({
    name: yup.string().min(2, 'Too short').required(),
    email: yup.string().email('Invalid email').required(),
    message: yup.string(),
  })

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
    validationSchema,
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
        error={formik.touched.name && formik.errors?.name}
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
        error={formik.touched.email && formik.errors?.email}
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
        error={formik.touched.message && formik.errors?.message}
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
