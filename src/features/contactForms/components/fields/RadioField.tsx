'use client'

import {
  Fade,
  FormControl,
  FormControlProps,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Stack,
} from '@chakra-ui/react'
import React from 'react'

export interface RadioOption {
  label: string
  value: string
}

export interface RadioFieldProps
  extends Omit<FormControlProps, 'onChange' | 'onBlur'> {
  id: string
  label?: string
  helperText?: React.ReactNode
  error?: React.ReactNode
  options: RadioOption[]
  value?: string
  onChange?: (value: string) => void
  onBlur?: React.FocusEventHandler
  labelColor?: string
  helperTextColor?: string
}

const RadioField: React.FC<RadioFieldProps> = ({
  id,
  label,
  helperText,
  error,
  options,
  value,
  onChange,
  onBlur,
  labelColor,
  helperTextColor,
  ...formControlProps
}) => {
  return (
    <FormControl
      isRequired={formControlProps?.isRequired}
      isReadOnly={formControlProps?.isReadOnly}
      isInvalid={!!error}
      id={id}
      {...formControlProps}
    >
      <FormLabel color={labelColor}>{label}</FormLabel>
      <RadioGroup
        name={id}
        value={value}
        onChange={onChange}
        colorScheme='teal'
      >
        <Stack direction='row' gap={6} onBlur={onBlur}>
          {options.map((option) => (
            <Radio key={option.value} value={option.value}>
              {option.label}
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
      <Fade in={!!error}>
        <FormHelperText color='error' fontWeight='medium'>
          {error}
        </FormHelperText>
      </Fade>
      {helperText && (
        <FormHelperText color={helperTextColor}>{helperText}</FormHelperText>
      )}
    </FormControl>
  )
}

export { RadioField }
