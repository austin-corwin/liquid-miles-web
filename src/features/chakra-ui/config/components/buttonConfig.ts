import type { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const buttonConfig: ComponentSingleStyleConfig = defineStyleConfig({
	baseStyle: {
		fontFamily: 'poppins',
		fontWeight: 'bold',
		lineHeight: 1,
		letterSpacing: 0.25,
	},
	variants: {
		// link: defineStyle({
		// 	fontWeight: 'bold',
		// 	background: 'none',
		// 	border: 'none',
		// }),
		// navLink: defineStyle({
		// 	fontWeight: 'bold',
		// 	background: 'none',
		// 	height: 'fit-content',
		// 	border: 'none',
		// 	p: 0,
		// 	py: 2,
		// 	_active: {
		// 		color: 'primary',
		// 		position: 'relative',
		// 		_after: {
		// 			content: '""',
		// 			position: 'absolute',
		// 			right: 0,
		// 			bottom: 0,
		// 			height: '2px',
		// 			w: 'full',
		// 			background: 'primary',
		// 		},
		// 	},
		// }),
		unstyled: defineStyle({
			padding: 0,
			px: 0,
			py: 0,
			height: 'unset',
			minWidth: 'unset',
		}),
	},
})

export { buttonConfig }
