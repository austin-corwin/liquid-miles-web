'use client'

import { textRecipes } from '@/features/chakra-ui/config/recipes/textRecipes'
import { toastRecipes } from '@/features/chakra-ui/config/recipes/toastRecipes'
import { Box, Fade, Icon, Text, useToast } from '@chakra-ui/react'
import { useFormik } from 'formik'
import React from 'react'
import { GoLightBulb } from 'react-icons/go'
import { FormConfig } from '../types/FormConfig'
import { parseValidationSchema } from '../utils/parseValidationSchema'
import { parseinitialValues } from '../utils/parseinitialValues'
import { RadioField, TextField } from './fields'
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
    toast({
      ...toastRecipes?.[success ? 'success' : 'error'],
      title: success
        ? formConfig.successTitle || 'Message Sent!'
        : 'Failed to Send',
      description: success
        ? formConfig.successMessage(values)
        : 'There was a problem sending the message. Please try again.',
      // Top + high z-index so it stays visible above page chrome / waves
      position: 'top',
      duration: success ? 5000 : 6000,
      isClosable: true,
      containerStyle: { zIndex: 10000 },
    })
    if (success && formConfig.onSuccess) {
      // Yield so Chakra can paint the toast before any redirect work
      await new Promise<void>((resolve) => {
        requestAnimationFrame(() => {
          setTimeout(resolve, 2200)
        })
      })
      await formConfig.onSuccess(values)
    }
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
        const error =
          formik.touched?.[fieldKey] && formik.errors?.[fieldKey]?.toString()
        const sharedProps = {
          key: field.id,
          id: field.id,
          label: field.label,
          isRequired: field.isRequired,
          isReadOnly: formik.isSubmitting,
          isDisabled: sent,
          helperText: field?.helperText,
          labelColor: variant === 'onDark' ? 'white' : undefined,
          helperTextColor:
            variant === 'onDark' ? 'whiteAlpha.800' : undefined,
          error,
        }

        if (field.fieldType === 'radio') {
          return (
            <RadioField
              {...sharedProps}
              options={field.options}
              value={formik.values?.[fieldKey]?.toString()}
              onChange={(value) => formik.setFieldValue(field.id, value)}
              onBlur={() => formik.setFieldTouched(field.id, true)}
            />
          )
        }

        return (
          <TextField
            {...sharedProps}
            fieldType={field.fieldType}
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
            {formConfig.onSuccess ? (
              <>Taking you to ticket checkout…</>
            ) : (
              <>
                <Icon as={GoLightBulb} /> Reset the form to submit a new
                message.
              </>
            )}
          </Text>
        </Fade>
      </Box>
    </Form>
  )
}

export { RenderForm }
