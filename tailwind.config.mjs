/**
 * Tailwind CSS
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        adminwhiteLight: '#ff5c28',
        adminBlueLight: '#b1b1b1',
        adminBlueDark: '#090D28'
      },
      fontFamily: {},
      fontSize: {}
    }
  },

  plugins: []
}
