'use client'

import { inputRecipes } from '@/features/chakra-ui/config/recipes/inputRecipes'
import {
  Fade,
  FormControl,
  FormControlProps,
  FormHelperText,
  FormLabel,
  Input,
  InputProps,
  Textarea,
  TextareaProps,
} from '@chakra-ui/react'
import React from 'react'

interface TextFieldProps extends FormControlProps {
  id: string
  fieldType: InputProps['type'] | 'textarea'
  helperText?: React.ReactNode
  error?: React.ReactNode
  placeholder?: InputProps['placeholder']
  inputProps?: InputProps & TextareaProps
}

/**
 * Form field for single and multi-line text and number inputs.
 */
const TextField: React.FC<TextFieldProps> = ({
  fieldType,
  label,
  helperText,
  placeholder,
  error,
  id,
  inputProps,
  ...formControlProps
}) => {
  const fieldProps: InputProps & TextareaProps = {
    ...inputRecipes.Default,
    placeholder,
    name: id,
    'aria-label': label,
    ...inputProps,
  }
  return (
    <FormControl
      isRequired={formControlProps?.isRequired}
      isReadOnly={formControlProps?.isReadOnly}
      isInvalid={!!error}
      id={id}
    >
      <FormLabel>{label}</FormLabel>
      {fieldType === 'textarea' ? (
        <Textarea {...fieldProps} />
      ) : (
        <Input type={fieldType} {...fieldProps} />
      )}
      <Fade in={!!error}>
        <FormHelperText color='error' fontWeight='medium'>
          {error}
        </FormHelperText>
      </Fade>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}

export { TextField }
