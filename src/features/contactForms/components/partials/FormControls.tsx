'use client'

import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
  ButtonProps,
} from '@chakra-ui/react'
import React from 'react'

export interface FormControlsProps extends ButtonGroupProps {
  submitLabel: string
  loadingText?: string
  submitButtonProps?: ButtonProps
  resetButtonProps?: ButtonProps
  isLoading?: boolean
}

/**
 * Form controls. e.g. submit buttons, pagination
 */
const FormControls: React.FC<FormControlsProps> = ({
  submitLabel = 'Submit',
  isLoading,
  loadingText,
  submitButtonProps,
  resetButtonProps,
  ...buttonGroupProps
}) => {
  return (
    <ButtonGroup
      flexDirection={'column'}
      alignItems='center'
      justifyContent='center'
      gap={2}
      w='full'
      isDisabled={isLoading}
      {...buttonGroupProps}
    >
      <Button
        type='submit'
        isLoading={isLoading}
        loadingText={loadingText}
        w='full'
        maxW='sm'
        {...submitButtonProps}
      >
        {submitLabel}
      </Button>
      <Button
        type='reset'
        isDisabled={isLoading}
        variant='link'
        colorScheme='gray'
        w='full'
        maxW='sm'
        size='sm'
        {...resetButtonProps}
      >
        {resetButtonProps?.['aria-label'] || 'Reset'}
      </Button>
    </ButtonGroup>
  )
}

export { FormControls }
