import tailwindConfig from '@/../tailwind.config'
import { Config } from 'tailwindcss'
import resolveConfig from 'tailwindcss/resolveConfig'

/**
 *
 * @param key Tailwind theme configuration category key. e.g. colors, fonts,  etc.
 * @param property Keys used to extract values
 * @returns CSS value as string
 *
 * @example
 * // get primary color hex value
 * getTailwindValue('colors',['primary']) // returns "#ffc800"
 *
 * // get red-500 hex value from colors
 * getTailwindValue('colors',['red','500']) // returns "#ff0000"
 */
const getTailwindValue = (
	key: string,
	property: [string] | [string, string]
): string => {
	const theme = resolveConfig(tailwindConfig).theme
	const categoryKey = key as keyof Config['theme']
	let value: string = ''
	if (property?.length === 1) {
		value = theme[categoryKey]?.[property[0]]
	} else {
		value = theme[categoryKey]?.[property[0]]?.[property[1]]
	}

	if (!value) console.warn('Tailwind value not found')

	return value
}

export default getTailwindValue
