/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'primary' : '#1B45BF',
      'deepBlue' : '#0A2640',
      'deeperBlue': '#023047',
      'darkBlue': '#193FAE',
      'lightBlue' : '#91D9FB',
      'secondary' : '#FACC05',
      'textBlack' : '#777777',
      'bgVeryBlack': '#D9D9D9',
      'white' : '#FFFFFF',
      'black' : '#000000'
    },
    fontFamily: {
      'sans' : 'Open Sans',
      'manrope': 'Manrope'
    },
    extend: {
      backgroundColor:{
        'custom-gray': 'rgba(217, 217, 217, 0.51)',
        'custom-bg-gray': 'rgba(217, 217, 217, 0.15)',
        'gray-10': 'rgba(217, 217, 217, 0.1)', 
        'check-back':'rgba(217, 217, 217, 0.25)'
      },
      animation: {
        swing: 'swing 1s ease-in-out infinite',
      },
      keyframes: {
        scaleUpDown: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },

    },
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

