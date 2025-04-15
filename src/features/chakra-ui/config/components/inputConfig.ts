import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = definePartsStyle({
  addon: {
    // rounded: 'none',
  },
  field: {
    // rounded: 'none',
    // background: 'white',
    // color: 'secondary',
    // fontFamily: '',
    fontWeight: 'semibold',
    _placeholder: {
      color: 'gray.300',
      fontFamily: 'poppins',
      fontWeight: 'semibold',
    },
    _focus: {
      // shadow: 'md',
    },
    _invalid: {
      color: 'red.700',
      _placeholder: {
        color: 'red.400',
      },
    },
  },
  element: {
    // borderRadius: '0',
  },
})

const variants = {
  // outline: definePartsStyle({
  // 	field: {
  // 		ringColor: 'primary',
  // 		_placeholder: {
  // 			color: 'primary',
  // 		},
  // 	},
  // }),
}

const inputConfig = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {},
})

export { inputConfig }
