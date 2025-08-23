/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,md,njk}",
    "./src/_includes/**/*.{html,md,njk}"
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors for natural perfumery
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7cfc8',
          300: '#a4b1a6',
          400: '#7d907f',
          500: '#607263',
          600: '#4c5b4e',
          700: '#3e4a40',
          800: '#333c35',
          900: '#2d332e',
        },
        bloom: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
        }
      },
      fontFamily: {
        'serif': ['Georgia', 'serif'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}