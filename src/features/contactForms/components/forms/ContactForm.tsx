'use client'

import { sleep } from '@/features/api/utils/sleep'
import { toastRecipes } from '@/features/chakra-ui/config/recipes/toastRecipes'
import { useToast } from '@chakra-ui/react'
import { useFormik } from 'formik'
import React from 'react'
import * as yup from 'yup'
import { FormConfig } from '../../types/FormConfig'
import { TextField } from '../fields/TextField'
import { Form } from '../partials/Form'
import { FormControls } from '../partials/FormControls'

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

const parseinitialValues = <D,>(fields: FormConfig<D>['fields']): D => {
  const schemaShape: Record<keyof D, string | number> = Object.fromEntries(
    fields.map((field): [keyof D, string | number] => [
      field.id as keyof D,
      field?.initialValue,
    ])
  ) as Record<keyof D, string | number>
  return schemaShape as D
}

const parseValidationSchema = <D,>(
  config: FormConfig<D>
): yup.ObjectSchema<D> => {
  const schemaShape: Record<keyof D, yup.AnySchema> = Object.fromEntries(
    config.fields.map((field): [keyof D, yup.AnySchema] => [
      field.id as keyof D,
      field.schema,
    ])
  ) as Record<keyof D, yup.AnySchema>
  return yup.object().shape(schemaShape) as unknown as yup.ObjectSchema<D>
}

const ContactForm: React.FC = () => {
  const validationSchema = parseValidationSchema<ContactFormValues>(formConfig)
  const initialValues = parseinitialValues<ContactFormValues>(formConfig.fields)

  const toast = useToast()
  const handleSubmit = async (values: ContactFormValues) => {
    formik.setSubmitting(true)
    await formConfig.onSubmit(values)
    toast({
      title: 'Message Sent!',
      description: formConfig.successMessage(values),
      ...toastRecipes.success,
    })
  }

  const formik = useFormik<ContactFormValues>({
    initialValues,
    onSubmit: async (values: ContactFormValues) => {
      await handleSubmit(values)
    },
    validateOnBlur: true,
    validationSchema,
  })

  return (
    <Form id={formConfig.id} onSubmit={formik.handleSubmit}>
      {formConfig?.fields.map((field) => {
        const fieldKey = field.id as keyof ContactFormValues
        return (
          <TextField
            key={field.id}
            id={field.id}
            label={field.label}
            fieldType={field.fieldType}
            isRequired={field.isRequired}
            isReadOnly={formik.isSubmitting}
            helperText={field?.helperText}
            error={formik.touched?.[fieldKey] && formik.errors?.[fieldKey]}
            inputProps={{
              value: formik.values?.[fieldKey],
              onChange: formik.handleChange,
              onBlur: formik.handleBlur,
            }}
          />
        )
      })}

      <FormControls
        {...formConfig?.formControlsProps}
        isLoading={formik.isSubmitting}
      />
    </Form>
  )
}

export { ContactForm }
