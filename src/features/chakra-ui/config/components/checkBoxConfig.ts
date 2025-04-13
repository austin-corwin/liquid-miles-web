import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(checkboxAnatomy.keys)

const baseStyle = definePartsStyle({
	container: {
		gap: 3,
		alignItems: 'start',
	},
	control: {
		mt: 1.5,
		background: 'transparent',
		borderColor: 'white',
		borderWidth: 2,
		transition: 'all .2s ease',
		_checked: {
			color: 'primary',
			background: 'white',
			_hover: {
				background: 'light',
			},
		},
	},
	label: {
		fontFamily: 'futura',
		fontWeight: 'medium',
		fontSize: 'md',
		color: 'inherit',
	},
})

const variants = {
	primary: definePartsStyle({
		control: {
			mt: 1.5,
			background: 'white',
			borderColor: 'primary',
			borderWidth: 2,
			transition: 'all .2s ease',
			_checked: {
				color: 'white',
				background: 'primary',
				_hover: {
					background: 'blue.300',
				},
			},
		},
		label: {
			fontFamily: 'poppins',
			fontWeight: 'bold',
			fontSize: 'md',
			color: 'inherit',
		},
	}),
}

const checkBoxConfig = defineMultiStyleConfig({
	baseStyle,
	variants,
})

export { checkBoxConfig }
