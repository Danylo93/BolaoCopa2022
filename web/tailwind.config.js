/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif'
      },
      backgroundImage: {
        app: 'url(/app-bg.png)'
      },
      colors: {
        ignite: {
          
          500: '#129E57'
        },
        yellow: {
          500: '#F7DD43',
          700: '#C2AD2C'
        },
        gray: {
          800: '#202024',
          600: '#323238',
          900: '#121214',
          100: '#C4C4CC',
          300: '#8D8D99'
        }
      }
    },
  },
  plugins: [],
}
