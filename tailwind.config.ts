import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{html,js}',
    './src/app/*.{js,ts,jsx,tsx,mdx}',
    './src/*',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: '#ffc800',
        secondary: '#1C606D',
        tertiary: '#ADCAD6',
        warning: '#FF8966',
        error: '#E5446D',
        light: '#ffffff',
        dark: {
          50: '#FFF',
          100: '#DDD',
          200: 'pink',
          300: 'blue',
          400: 'purple',
          500: '#444', // primary bg and border color
          600: '#000', // hover color
          700: '#1C606D', // active color for solid
          900: 'yellow',
        },
      },
      fontFamily: {
        primary: 'Poppins',
      },
      fontSize: {
        hero: '4rem',
      },
      boxShadow: {
        'btn-fill': 'inset 0 -4rem 0 0 #ffc800',
      },
    },
  },
  plugins: [],
} satisfies Config
