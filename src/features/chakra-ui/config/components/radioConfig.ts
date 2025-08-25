import { radioAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys)

const baseStyle = definePartsStyle({
  container: {
    color: 'gray.400',
    fontSize: 'xl',
    _checked: {
      color: 'secondary',
    },
  },
  control: {
    background: 'light',
    borderColor: 'secondary',
    transition: 'all .2s ease',
    _checked: {
      color: 'secondary',
      background: 'secondary',
      _hover: {
        color: 'primary',
        background: 'primary',
      },
    },
    _hover: {
      color: 'primary',
      background: 'primary',
      borderColor: 'primary',
    },
  },
  label: {
    fontFamily: 'poppins',
    fontWeight: 'bold',
    letterSpacing: '0.025rem',
    fontSize: 'xl',
    color: 'inherit',
  },
})

const solid = definePartsStyle({
  label: {
    color: 'secondary',
  },
  control: {
    background: 'white',
    borderColor: 'secondary',
  },
})

const md = definePartsStyle({
  label: {
    fontSize: 'xl',
  },
})
const lg = definePartsStyle({
  label: {
    fontSize: 'xl',
  },
})

const radioConfig = defineMultiStyleConfig({
  baseStyle,
  sizes: { md, lg },
  variants: { solid },
})

export { radioConfig }
