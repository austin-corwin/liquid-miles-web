import tailwindConfig from '@/../tailwind.config'
import resolveConfig from 'tailwindcss/resolveConfig'

const getTailwindTheme = () => {
  const { theme } = resolveConfig(tailwindConfig)
  return theme
}

export { getTailwindTheme }
