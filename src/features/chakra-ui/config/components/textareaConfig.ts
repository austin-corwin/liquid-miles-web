import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const baseStyle = defineStyle({
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
})

const textareaConfig = defineStyleConfig({
  baseStyle,
  variants: {},
  defaultProps: {},
})

export { textareaConfig }
