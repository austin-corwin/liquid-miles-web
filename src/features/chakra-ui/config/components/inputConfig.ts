import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = definePartsStyle({
  addon: {},
  field: {
    fontWeight: 'medium',
    _placeholder: {
      color: 'gray.400',
      fontFamily: 'poppins',
      fontWeight: 'medium',
    },
    _groupHover: {
      outlineColor: 'gray.200',
      borderColor: 'black',
    },
    _hover: {
      borderColor: 'black',
    },
    _focus: {
      ringColor: 'black',
      outlineColor: 'gray.300',
      borderColor: 'black',
    },
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
