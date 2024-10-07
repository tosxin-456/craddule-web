/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'primary' : '#1B45BF',
      'deepBlue' : '#0A2640',
      'darkBlue' : '#1C3D5B',
      'lightBlue' : '#91D9FB',
      'secondary' : '#FACC05',
      'textBlack' : '#777777',
      'white' : '#FFFFFF',
      'black' : '#000000'
    },
    fontFamily: {
      'sans' : 'Open Sans',
      'manrope': 'Manrope'
    },
    extend: {},
    screens: {
      'sm': '400px', 
      'md': '800px', 
      'lg': '1024px', 
      'xl': '1280px', 
      '2xl': '1536px', 
    },
  },
  plugins: [],
}

