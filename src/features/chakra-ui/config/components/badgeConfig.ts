import type { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const badgeConfig: ComponentSingleStyleConfig = defineStyleConfig({
  baseStyle: {
    rounded: 'full',
    fontWeight: 'semibold',
    lineHeight: 1,
  },
  variants: {},
  sizes: {
    sm: defineStyle({
      px: 2,
      py: 0.5,
    }),
    md: defineStyle({
      px: 3,
      py: 1,
    }),
    lg: defineStyle({
      px: 4,
      py: 2,
    }),
  },
})

export { badgeConfig }
