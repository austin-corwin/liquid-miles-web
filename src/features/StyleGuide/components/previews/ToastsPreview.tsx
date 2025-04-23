'use client'
import { toastRecipes } from '@/features/chakra-ui/config/recipes/toastRecipes'
import {
  Button,
  ButtonGroup,
  useToast,
  UseToastOptions,
  VStack,
} from '@chakra-ui/react'
import React from 'react'
import { UiComponentPreview } from '../../config/uiSectionsConfig'

const ToastsPreview: React.FC = () => {
  const toast = useToast()
  const toastOptions: Record<UseToastOptions['status'], UseToastOptions> = {
    info: {
      title: 'Information Toast',
      description: 'Letting you something non-critical happened.',
      // status: 'info',
      duration: 9000,
      isClosable: true,
      ...toastRecipes.info,
    },

    success: {
      title: 'Successful Toast',
      description: 'Letting you know something good happened.',
      // status: 'success',
      duration: 9000,
      isClosable: true,
      ...toastRecipes.success,
    },
    error: {
      title: 'Error Toast',
      description: 'Letting you know something critical went wrong.',
      // status: 'error',
      duration: 9000,
      isClosable: true,
      ...toastRecipes.error,
    },
    warning: {
      title: 'Warning Toast',
      description: 'Letting you know something non-critical went wrong.',
      // status: 'warning',
      duration: 9000,
      isClosable: true,
      ...toastRecipes.warning,
    },
    loading: {
      title: 'Loading Toast',
      description: 'Letting you know something is in progress.',
      // status: 'loading',
      duration: 9000,
      isClosable: true,
      ...toastRecipes.loading,
    },
  }

  return (
    <VStack alignItems='start' gap={8} w='full'>
      <ButtonGroup>
        {/* <Button
          onClick={() =>
            toast({
              title: 'Default Toast',
              variant: 'default',
              duration: 9000,
              icon: <TbHierarchy2 />,
            })
          }
          textTransform='capitalize'
        >
          Default Toast
        </Button> */}
        {Object.entries(toastOptions).map(([label, toastData]) => (
          <Button
            key={label}
            onClick={() => toast(toastData)}
            textTransform='capitalize'
          >
            {label} Toast
          </Button>
        ))}
      </ButtonGroup>
    </VStack>
  )
}

const toastsPreviewConfig: UiComponentPreview = {
  id: 'toasts-preview',
  title: 'Toasts',
  description: 'Simple, unobtrusive UI feedback.',
  children: <ToastsPreview />,
}

export { toastsPreviewConfig }
