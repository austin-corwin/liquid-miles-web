import { ToastProps } from '@chakra-ui/react'
import { GoAlertFill, GoCheckCircleFill, GoZap } from 'react-icons/go'

const toastRecipes: Record<ToastProps['status'], ToastProps> = {
  info: {
    status: 'info',
    icon: <GoZap size={24} />,
    colorScheme: 'dark',
  },
  success: {
    variant: 'subtle',
    status: 'success',
    icon: <GoCheckCircleFill size={24} />,
  },
  warning: {
    variant: 'subtle',
    status: 'warning',
  },
  error: {
    variant: 'subtle',
    status: 'error',
    icon: <GoAlertFill size={24} />,
  },
  loading: {
    colorScheme: 'dark',
    status: 'loading',
  },
}

export { toastRecipes }
