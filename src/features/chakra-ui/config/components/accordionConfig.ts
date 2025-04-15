import { accordionAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(accordionAnatomy.keys)

const baseStyle = definePartsStyle({
  container: {},
  button: {},
  panel: {},
  icon: {},
})

const accordionConfig = defineMultiStyleConfig({ baseStyle })

export { accordionConfig }
