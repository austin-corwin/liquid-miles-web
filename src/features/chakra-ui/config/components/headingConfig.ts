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
    '5xl': { fontSize: '5.25rem', lineHeight: 1.1 }, // 84px
    '6xl': { fontSize: '6rem', lineHeight: 1 }, // 96px
  },
  defaultProps: {},
})

export { headingConfig }
