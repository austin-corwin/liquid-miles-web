import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = definePartsStyle({
  addon: {},
  field: {
    fontWeight: 'semibold',
    _placeholder: {
      color: 'gray.300',
      fontFamily: 'poppins',
      fontWeight: 'semibold',
    },
    _focus: {},
    _invalid: {
      color: 'red.700',
      _placeholder: {
        color: 'red.400',
      },
    },
  },
  element: {},
})

const variants = {}

const inputConfig = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {},
})

export { inputConfig }
