'use client'

import { ContactFormEntry } from '@/api/gql/graphql'
import * as yup from 'yup'
import React from 'react'
import { FormConfig } from '../../types/FormConfig'
import { createContactEntry } from '../../utils/createContactEntry'
import { RenderForm } from '../RenderForm'

interface TicketSuccessFormValues {
  name: string
  email: string
  shirtSize: string
  notes: string
}

const formConfig: FormConfig<TicketSuccessFormValues> = {
  id: 'ticket-success-form',
  successMessage: (values: TicketSuccessFormValues) => {
    const firstName = values?.name?.split(' ').shift()
    return `Thanks, ${firstName}! Your info was saved.`
  },
  onSubmit: async (values: TicketSuccessFormValues) => {
    const title = `${values.email} - ${new Date().toLocaleDateString('en-US', {
      dateStyle: 'medium',
    })}`
    const entryData: Partial<ContactFormEntry> = {
      title,
      channel: 'Ticket Success',
      name: values?.name,
      email: values?.email,
      message: values?.notes,
      data: {
        shirtSize: values?.shirtSize,
      } as unknown as string,
    }

    const contentfulResponse = await createContactEntry(entryData)
    return contentfulResponse.success
  },
  formControlsProps: {
    submitLabel: 'Submit',
    loadingText: 'Submitting',
  },
  fields: [
    {
      id: 'name',
      label: 'Name',
      fieldType: 'text',
      isRequired: true,
      helperText: 'How should we address you?',
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
        .required('Email is required'),
      initialValue: '',
    },
    {
      id: 'shirtSize',
      label: 'T-Shirt Size',
      fieldType: 'text',
      isRequired: true,
      helperText: 'e.g., XS, S, M, L, XL, XXL',
      schema: yup
        .string()
        .matches(/^XS$|^S$|^M$|^L$|^XL$|^XXL$/i, 'Use XS, S, M, L, XL, or XXL')
        .required('T-Shirt size is required'),
      initialValue: '',
    },
    {
      id: 'notes',
      label: 'Other Notes',
      fieldType: 'textarea',
      isRequired: false,
      schema: yup.string(),
      initialValue: '',
    },
  ],
}

const TicketSuccessForm: React.FC = () => {
  return <RenderForm formConfig={formConfig} />
}

export { TicketSuccessForm }
