/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: '#root',
  darkMode: 'class',
  corePlugins: {
    preflight: false,
  },

  theme: {
    extend: {
      fontSize: {
        14: '14px',
      },
      backgroundColor: {
        'main-bg': '#FAFBFB',
        'main-dark-bg': '#18191A',
        'secondary-dark-bg': '#212121',
        'light-gray': '#c9c8c7',
        'half-transparent': 'rgba(0, 0, 0, 0.5)',
      },
      borderWidth: {
        1: '1px',
      },
      borderColor: {
        color: 'rgba(0, 0, 0, 0.1)',
      },
      width: {
        400: '400px',
        760: '760px',
        780: '780px',
        800: '800px',
        1000: '1000px',
        1200: '1200px',
        1400: '1400px',
      },
      height: {
        80: '80px',
      },
      minHeight: {
        590: '590px',
      },
      colors :{
        'gray-1100' : '#07070c',
        'd-gray-1100':'#f1f1f1',
        'poly-green' : '#054ae6',
        'dark-blue3' : '#1F2B46',
        'light-blue' : '#2196F3',


      },
    },
  },
  plugins: [],
}

