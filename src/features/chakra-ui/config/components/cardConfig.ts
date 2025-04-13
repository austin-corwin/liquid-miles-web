import { cardAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(cardAnatomy.keys)

const baseStyle = definePartsStyle({
	container: {
		shadow: 'none',
		transition: 'all .3s ease',
		_groupHover: { shadow: 'lg' },
	},
})
const variants = {}

const cardConfig = defineMultiStyleConfig({
	baseStyle,
	variants,
})

export { cardConfig }
