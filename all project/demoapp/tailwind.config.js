/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      gradient: {
        'gradient-radial': 'radial-gradient(circle, #34d399, #3b82f6)',
      },
      colors: {
        'primary': '#5D50C6',
        'secondary': '#F85E9F',
        'success': '#2ecc71',
        'danger': '#e74c3c',
        'warning': '#ff9f43',
        'black': '#000000',
        'white': '#ffffff',
        'gray': '#191825',
        'lightgray': '#eeeeee',
        'seconary-text': '#8c8b92',
        'orange': '#FF5722',
        'yellow': '#FACD49'
      },
      spacing: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '1/8': '12.5%',
        '1/16': '6.25%',
      },
    },
  },
  plugins: [],
}

