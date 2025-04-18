import type { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { defineStyleConfig } from '@chakra-ui/react'

const headingConfig: ComponentSingleStyleConfig = defineStyleConfig({
  baseStyle: {
    fontWeight: 'bold',
    fontFamily: 'poppins',
    display: 'flex',
    alignItems: 'baseline',
  },
  variants: {},
  sizes: {
    '4xl': { fontSize: '4.5rem', lineHeight: 1 }, // 72
    '5xl': { fontSize: '5.25rem', lineHeight: 1.1 }, // 84px
  },
  defaultProps: {},
})

export { headingConfig }
