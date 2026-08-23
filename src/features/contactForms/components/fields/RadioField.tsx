'use client'

import {
  Fade,
  FormControl,
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

/** Explicit props only — avoids FormControlProps.onChange type clash with RadioGroup */
export interface RadioFieldProps {
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
  isRequired?: boolean
  isReadOnly?: boolean
  isDisabled?: boolean
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
  isRequired,
  isReadOnly,
  isDisabled,
}) => {
  return (
    <FormControl
      isRequired={isRequired}
      isReadOnly={isReadOnly}
      isDisabled={isDisabled}
      isInvalid={!!error}
      id={id}
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
