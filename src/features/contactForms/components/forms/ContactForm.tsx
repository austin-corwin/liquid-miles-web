'use client'

import { sleep } from '@/features/api/utils/sleep'
import React from 'react'
import * as yup from 'yup'
import { FormConfig } from '../../types/FormConfig'

import { RenderForm } from '../RenderForm'

interface ContactFormValues {
  name: string
  email: string
  message: string
}

const formConfig: FormConfig<ContactFormValues> = {
  id: 'contact-form',
  successMessage: (values: ContactFormValues) => {
    const firstName = values?.name?.split(' ').shift()
    return `We'll be in touch soon, ${firstName}!`
  },
  onSubmit: async (values: ContactFormValues) => {
    console.log('Contact Form Submitted', values)
    await sleep(1000)
  },
  formControlsProps: {
    submitLabel: 'Send It',
    loadingText: 'Sending',
  },
  fields: [
    {
      id: 'name',
      label: 'Name',
      fieldType: 'text',
      isRequired: true,
      helperText: 'What should we call you?',
      schema: yup.string().min(2, 'Too short').required(),
    },
    {
      id: 'email',
      label: 'Email',
      fieldType: 'email',
      isRequired: true,
      schema: yup.string().email('Invalid email address').required(),
    },
    {
      id: 'message',
      label: 'Message',
      fieldType: 'textarea',
      schema: yup.string(),
    },
  ],
}

const ContactForm: React.FC = () => {
  return <RenderForm formConfig={formConfig} />
}

export { ContactForm }
