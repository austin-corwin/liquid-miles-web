import { alertAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(alertAnatomy.keys)

const baseStyle = definePartsStyle({
  title: {},
  container: {},
  description: {},
  icon: {},
  spinner: {},
})

const variants = {}

const alertConfig = defineMultiStyleConfig({
  baseStyle,
  variants,
})
export { alertConfig }
