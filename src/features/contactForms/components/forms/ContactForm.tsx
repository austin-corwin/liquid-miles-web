'use client'

import { ContactFormEntry } from '@/api/gql/graphql'
import { EmailTemplates } from '@/features/emails/types/EmailTemplates'
import { sendEmail, SendEmailProps } from '@/features/emails/utils/sendEmail'
import React from 'react'
import * as yup from 'yup'
import { FormConfig } from '../../types/FormConfig'
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

    const emailProps: SendEmailProps = {
      to: ['liquidmilesrace@gmail.com'],
      cc: ['austincorwin5@gmail.com', 'courtneymorrison443@gmail.com'],
      from: 'contact',
      replyTo: values.email,
      subject: `Contact Message from ${values.name}`,
      messageData: {
        title: `Contact Message from ${values.name}`,
        recipientName: values.name,
        message: values?.message,
      },
      template: EmailTemplates.Message,
    }

    const [contentfulResponse, emailResponse] = await Promise.all([
      await createContactEntry(entryData),
      await sendEmail(emailProps),
    ])

    console.log('contentfulResponse is', contentfulResponse)

    return contentfulResponse.success || emailResponse.success
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
      schema: yup.string().required('Name is required'),
      initialValue: '',
    },
    {
      id: 'email',
      label: 'Email',
      fieldType: 'email',
      isRequired: true,
      schema: yup
        .string()
        .email('Invalid email address')
        .required('We need your email in order to reply to your message!'),
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
