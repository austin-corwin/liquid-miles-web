import { ChakraProviderProps } from '@chakra-ui/react'

const toastOptions: ChakraProviderProps['toastOptions'] = {
  defaultOptions: { position: 'bottom', duration: 6000, status: 'info' },
}
export { toastOptions }
