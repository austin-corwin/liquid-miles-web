'use client'

import { toastRecipes } from '@/features/chakra-ui/config/recipes/toastRecipes'
import { useToast } from '@chakra-ui/react'
import { useFormik } from 'formik'
import React from 'react'
import { FormConfig } from '../types/FormConfig'
import { parseValidationSchema } from '../utils/parseValidationSchema'
import { parseinitialValues } from '../utils/parseinitialValues'
import { TextField } from './fields'
import { Form } from './partials/Form'
import { FormControls } from './partials/FormControls'

interface RenderFormProps<D> {
  formConfig: FormConfig<D>
}

/**
 * Render a contact form based on a fonfig
 */
const RenderForm = function <D>({ formConfig }: RenderFormProps<D>) {
  const validationSchema = parseValidationSchema<D>(formConfig)
  const initialValues = parseinitialValues<D>(formConfig.fields)
  const toast = useToast()
  const handleSubmit = async (values: D) => {
    formik.setSubmitting(true)
    await formConfig.onSubmit(values)
    toast({
      title: 'Message Sent!',
      description: formConfig.successMessage(values),
      ...toastRecipes.success,
    })
  }

  const formik = useFormik<D>({
    initialValues,
    onSubmit: async (values: D) => {
      await handleSubmit(values)
    },
    validateOnBlur: true,
    validationSchema,
  })

  return (
    <Form id={formConfig.id} onSubmit={formik.handleSubmit}>
      {formConfig?.fields.map((field) => {
        const fieldKey = field.id as keyof D
        return (
          <TextField
            key={field.id}
            id={field.id}
            label={field.label}
            fieldType={field.fieldType}
            isRequired={field.isRequired}
            isReadOnly={formik.isSubmitting}
            helperText={field?.helperText}
            error={
              formik.touched?.[fieldKey] &&
              formik.errors?.[fieldKey]?.toString()
            }
            inputProps={{
              value: formik.values?.[fieldKey]?.toString(),
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

export { RenderForm }
