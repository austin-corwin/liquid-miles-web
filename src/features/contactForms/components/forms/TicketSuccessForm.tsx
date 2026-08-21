'use client'

import { ContactFormEntry } from '@/api/gql/graphql'
import { startTicketCheckout } from '@/features/Tickets/startTicketCheckout'
import { TICKET_TYPES, TicketTypeId } from '@/features/Tickets/ticketOptions'
import React from 'react'
import * as yup from 'yup'
import { FormConfig } from '../../types/FormConfig'
import { createContactEntry } from '../../utils/createContactEntry'
import { RenderForm } from '../RenderForm'

interface TicketSuccessFormValues {
  name: string
  email: string
  shirtSize: string
  wantsHoodie: string
  notes: string
}

interface TicketSuccessFormProps {
  ticketType: TicketTypeId
}

const TicketSuccessForm: React.FC<TicketSuccessFormProps> = ({
  ticketType,
}) => {
  const ticket = TICKET_TYPES[ticketType]

  const formConfig: FormConfig<TicketSuccessFormValues> = {
    id: 'ticket-info-form',
    successTitle: 'Shirt info saved!',
    successMessage: () => 'Taking you to the ticket checkout page…',
    onSubmit: async (values: TicketSuccessFormValues) => {
      const title = `${values.email} - ${ticket.label} - ${new Date().toLocaleDateString(
        'en-US',
        {
          dateStyle: 'medium',
        }
      )}`
      const notes = values?.notes?.trim()
      const wantsHoodie = values.wantsHoodie === 'Yes'
      const entryData: Partial<ContactFormEntry> = {
        title,
        channel: 'Ticket Success',
        name: values?.name,
        email: values?.email,
        message: [
          notes,
          `Ticket: ${ticket.label}`,
          `T-shirt size: ${values.shirtSize}`,
          `Hoodie instead of shirt: ${values.wantsHoodie}`,
        ]
          .filter(Boolean)
          .join('\n'),
        data: {
          shirtSize: values?.shirtSize,
          ticket: ticket.label,
          wantsHoodie,
        } as unknown as string,
      }

      const contentfulResponse = await createContactEntry(entryData)
      return contentfulResponse.success
    },
    onSuccess: async (values) => {
      await startTicketCheckout({
        priceId: ticket.priceId,
        ticketType: ticket.id,
        includeHoodie: values.wantsHoodie === 'Yes',
        shirtSize: values.shirtSize,
        name: values.name,
        email: values.email,
      })
    },
    formControlsProps: {
      submitLabel: 'Continue to payment',
      loadingText: 'Saving',
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
          .matches(
            /^XS$|^S$|^M$|^L$|^XL$|^XXL$/i,
            'Use XS, S, M, L, XL, or XXL'
          )
          .required('T-Shirt size is required'),
        initialValue: '',
      },
      {
        id: 'wantsHoodie',
        label:
          'Would you like a hoodie instead of a shirt this year? Pricing will be factored into your ticket ($10 more than the shirt price)',
        fieldType: 'radio',
        isRequired: true,
        options: [
          { label: 'Yes', value: 'Yes' },
          { label: 'No', value: 'No' },
        ],
        schema: yup
          .string()
          .oneOf(['Yes', 'No'], 'Please select Yes or No')
          .required('Please select Yes or No'),
        initialValue: 'No',
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

  return <RenderForm formConfig={formConfig} />
}

export { TicketSuccessForm }
