const { screens } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      screens: {
        xs: '425px',
        ...screens
      },
      colors: {
        primary: {
          50: '#e5f4ff',
          100: '#cfecff',
          200: '#a9d9ff',
          300: '#75bbff',
          400: '#3f8dff',
          500: '#145eff',
          600: '#0048ff',
          700: '#0049ff',
          800: '#0041e3',
          900: '#002aa8',
          950: '#001666'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
