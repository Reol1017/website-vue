/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-black-hover': 'rgba(0, 0, 0, 0.2)'
      },
      keyframes: {
        'ttb': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' }
        },
        'c-scale':{
          '0%, 100%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(1.1)'
          }
        }
      },
      animation:{
        'a-ttb': 'ttb .1s ease-in-out',
        'a-c-scale': 'c-scale .5s ease-in-out'
      }
    },
  },
  plugins: [],
}

