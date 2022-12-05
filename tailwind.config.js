/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}",
    "./**/*.{html,js}"
  ],
  theme: {
    extend: {
      boxShadow: {
        'lightshadow': '0px 0px 20px rgba(235, 243, 255, 1)'
      }
    },
    fontFamily: {
      outfit: ['Outfit', 'sans-serif']
    },
    colors: {
      'white': 'rgba(244,244,244,1)',
      'darkblue': '#04152F',
      'blue': '#1363DF',
      'lightblue': '#EBF3FF',
      'menu': '#F4F4F4'
    },
  },
  plugins: [],
}