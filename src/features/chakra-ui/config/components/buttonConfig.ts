import type { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const buttonConfig: ComponentSingleStyleConfig = defineStyleConfig({
  baseStyle: {
    fontFamily: 'poppins',
    fontWeight: 'bold',
    lineHeight: 1,
    letterSpacing: 0.25,
  },
  variants: {
    unstyled: defineStyle({
      padding: 0,
      px: 0,
      py: 0,
      height: 'unset',
      minWidth: 'unset',
    }),
  },
  defaultProps: {
    colorScheme: 'dark',
  },
})

export { buttonConfig }
