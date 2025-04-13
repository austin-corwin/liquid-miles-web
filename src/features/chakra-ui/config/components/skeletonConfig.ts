import type { ComponentSingleStyleConfig } from '@chakra-ui/react'
import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const skeletonConfig: ComponentSingleStyleConfig = defineStyleConfig({
	baseStyle: {},
	variants: {
		static: defineStyle({
			animation: 'none',
			animationIterationCount: 0,
			speed: 0,
			background: 'gray.200',
			startColor: 'gray.200',
			endColor: 'gray.200',
		}),
		light: defineStyle({
			speed: 1.5,
			startColor: 'gray.100',
			endColor: 'gray.50',
		}),
	},
})

export { skeletonConfig }
