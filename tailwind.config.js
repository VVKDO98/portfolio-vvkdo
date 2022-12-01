/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      outfit: ['Outfit', 'sans-serif']
    },
    colors: {
      'white': 'rgba(244,244,244,0.7)',
      'darkblue': '#04152F',
      'blue': '#1363DF',
      'lightblue': '#EBF3FF',
      'menu': '#F4F4F4'
    },
  },
  plugins: [],
}