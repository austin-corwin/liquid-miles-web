import type { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { defineStyleConfig } from '@chakra-ui/react'

const headingConfig: ComponentSingleStyleConfig = defineStyleConfig({
	baseStyle: {
		fontWeight: 'bold',
		fontFamily: 'poppins',
		display: 'flex',
		alignItems: 'baseline',
	},
	variants: {},
	sizes: {
		// sm: { fontSize: '0.875rem' },
		// base: { fontSize: '1rem' },
		// lg: { fontSize: '1.125rem' }, // 18px
		// xl: { fontSize: '1.25rem' }, // 20px
		// '2xl': { fontSize: '1.5rem' }, // 24px
		// '3xl': { fontSize: '2rem' }, // 32px
		// '4xl': { fontSize: '2.875rem' }, // 46px
		// '5xl': { fontSize: '3.125rem' }, // 50px
		// '6xl': { fontSize: '3.5rem' }, // 56px
		// '7xl': { fontSize: '4.5rem' }, // 72px
	},
	defaultProps: {},
})

export { headingConfig }
