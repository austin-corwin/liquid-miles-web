'use client'

import { textRecipes } from '@/features/chakra-ui/config/recipes/textRecipes'
import { toastRecipes } from '@/features/chakra-ui/config/recipes/toastRecipes'
import { Box, Fade, Icon, Text, ToastProps, useToast } from '@chakra-ui/react'
import { useFormik } from 'formik'
import React from 'react'
import { GoLightBulb } from 'react-icons/go'
import { FormConfig } from '../types/FormConfig'
import { parseValidationSchema } from '../utils/parseValidationSchema'
import { parseinitialValues } from '../utils/parseinitialValues'
import { TextField } from './fields'
import { Form } from './partials/Form'
import { FormControls } from './partials/FormControls'

interface RenderFormProps<D> {
  formConfig: FormConfig<D>
  /** Optional visual variant overrides for dark backgrounds */
  variant?: 'default' | 'onDark'
}

/**
 * Render a contact form based on a fonfig
 */
const RenderForm = function <D>({
  formConfig,
  variant = 'default',
}: RenderFormProps<D>) {
  const toast = useToast()
  const [sent, setSent] = React.useState<boolean>(false)
  const validationSchema = parseValidationSchema<D>(formConfig)
  const initialValues = parseinitialValues<D>(formConfig.fields)
  const handleSubmit = async (values: D) => {
    const success = await formConfig.onSubmit(values)
    setSent(success)
    const toastProps: ToastProps = {
      title: success ? 'Message Sent!' : 'Failed to Send',
      description: success
        ? formConfig.successMessage(values)
        : 'There was a problem sending the message. Please try again.',
      ...toastRecipes?.[success ? 'success' : 'error'],
    }
    toast({
      ...toastProps,
    })
  }
  const handleReset = () => {
    setSent(false)
    formik.resetForm()
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
    <Form
      id={formConfig.id}
      onSubmit={formik.handleSubmit}
      onReset={handleReset}
    >
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
            isDisabled={sent}
            helperText={field?.helperText}
            labelColor={variant === 'onDark' ? 'white' : undefined}
            helperTextColor={
              variant === 'onDark' ? 'whiteAlpha.800' : undefined
            }
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
        isDisabled={formik.isSubmitting || sent}
      />
      <Box w='full'>
        <Fade in={sent}>
          <Text {...textRecipes.FinePrint} textAlign='center' w='full'>
            <Icon as={GoLightBulb} /> Reset the form to submit a new message.
          </Text>
        </Fade>
      </Box>
    </Form>
  )
}

export { RenderForm }
