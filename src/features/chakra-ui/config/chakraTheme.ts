import { getTailwindTheme } from '@/features/chakra-ui/utils/getTailwindTheme'
import { extendTheme } from '@chakra-ui/react'
import { breakpoints } from './breakpoints'
import { componentsConfig } from './componentsConfig'
import fonts from './fonts'

const twTheme = getTailwindTheme()

const chakraTheme = extendTheme({
	breakpoints,
	components: componentsConfig,
	colors: {
		...twTheme.colors,
	},
	fonts: fonts,
	initialColorMode: 'light',
	sizes: {
		container: {
			...breakpoints,
		},
	},
	useSystemColorMode: false,
})

export { chakraTheme }
