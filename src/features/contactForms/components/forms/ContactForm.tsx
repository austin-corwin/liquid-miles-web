'use client'

import React from 'react'
import * as yup from 'yup'
import { FormConfig } from '../../types/FormConfig'

import { ContactFormEntry } from '@/api/gql/graphql'
import { createContactEntry } from '../../utils/createContactEntry'
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
    const title = `${values.email} - ${new Date().toLocaleDateString('en-US', {
      dateStyle: 'medium',
    })}`
    const entryData: Partial<ContactFormEntry> = {
      title,
      channel: 'Contact',
      name: values?.name,
      email: values?.email,
      message: values?.message,
    }
    const submission = await createContactEntry(entryData)
    console.log('Results: ', submission)
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
      initialValue: '',
    },
    {
      id: 'email',
      label: 'Email',
      fieldType: 'email',
      isRequired: true,
      schema: yup.string().email('Invalid email address').required(),
      initialValue: '',
    },
    {
      id: 'message',
      label: 'Message',
      fieldType: 'textarea',
      schema: yup.string(),
      initialValue: '',
    },
  ],
}

const ContactForm: React.FC = () => {
  return <RenderForm formConfig={formConfig} />
}

export { ContactForm }
