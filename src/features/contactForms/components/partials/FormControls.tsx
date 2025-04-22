'use client'

import {
  Button,
  ButtonGroup,
  ButtonGroupProps,
  ButtonProps,
} from '@chakra-ui/react'
import React from 'react'

interface FormControlsProps extends ButtonGroupProps {
  submitLabel: string
  loadingText?: string
  submitButtonProps?: ButtonProps
  isLoading?: boolean
}

const FormControls: React.FC<FormControlsProps> = ({
  submitLabel = 'Submit',
  isLoading,
  loadingText,
  submitButtonProps,
  ...buttonGroupProps
}) => {
  return (
    <ButtonGroup isDisabled={isLoading} {...buttonGroupProps}>
      <Button
        type='submit'
        isLoading={isLoading}
        loadingText={loadingText}
        minW={40}
        {...submitButtonProps}
      >
        {submitLabel}
      </Button>
    </ButtonGroup>
  )
}

export { FormControls }
