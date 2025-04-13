import { selectAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { CSSTransition } from '../transitions'

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(selectAnatomy.keys)

const baseStyle = definePartsStyle({
	field: {
		fontFamily: 'poppins',
		transition: CSSTransition.EaseIn200,
		_focus: {
			shadow: 'lg',
		},
		_placeholder: {
			color: 'gray.300',
			fontFamily: 'poppins',
			fontWeight: 'medium',
		},
	},
})
const selectConfig = defineMultiStyleConfig({
	baseStyle,
})

export { selectConfig }
