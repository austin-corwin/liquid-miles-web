import { stepperAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(stepperAnatomy.keys)

const baseStyle = definePartsStyle({
  indicator: {
    background: 'red.500',
    _complete: {
      background: 'red.200',
    },
  },
  step: {
    _active: {
      bg: 'red.300',
    },
  },
})

const stepperConfig = defineMultiStyleConfig({
  baseStyle,
  variants: {},
  defaultProps: {},
})

export { stepperConfig }
