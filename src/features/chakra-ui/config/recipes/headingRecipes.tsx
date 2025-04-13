import { HeadingProps } from '@chakra-ui/react'
import { CSSTransition } from '../transitions'

export enum HeadingRecipe {
	H1 = 'H1',
	H2 = 'H2',
	H3 = 'H3',
	H4 = 'H4',
	H5 = 'H5',
	H6 = 'H6',
	Anchor = 'Anchor',
}
const headingRecipes: Record<HeadingRecipe, HeadingProps> = {
	H1: {
		as: 'h1',
		size: '4xl',
		textTransform: 'capitalize',
	},
	H2: {
		as: 'h2',
		size: '3xl',
		textTransform: 'capitalize',
	},
	H3: {
		as: 'h3',
		size: '2xl',
		textTransform: 'uppercase',
	},
	H4: {
		as: 'h4',
		size: 'xl',
		textTransform: 'capitalize',
	},
	H5: {
		as: 'h5',
		size: 'lg',
		textTransform: 'uppercase',
	},
	H6: {
		as: 'h6',
		size: 'base',
		textTransform: 'uppercase',
	},
	Anchor: {
		role: 'group',
		cursor: 'pointer',
		onClick: async (e: React.MouseEvent<HTMLHeadingElement>) => {
			const text = `${window.location.href}#${e.currentTarget.id}`
			await navigator.clipboard.writeText(text)
			console.log('Copy: ', text)
		},
		_after: {
			content: '"🔗"',
			position: 'relative',
			left: 2,
			opacity: 0,
			trasition: CSSTransition.EaseIn200,
		},
		_hover: {
			_after: {
				opacity: 1,
			},
		},
	},
}

export { headingRecipes }
