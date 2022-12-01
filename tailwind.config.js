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
      'white': '#ffffff',
      'darkblue': '#04152F',
      'blue': '#1363DF',
      'lightblue': '#EBF3FF',
      'menu': '#F4F4F4'
    },
  },
  plugins: [],
}