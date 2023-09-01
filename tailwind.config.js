/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/views/**/*.{html,ejs}', './app/views/*.{html,ejs}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat-Regular'],
        montserratBold: ['Montserrat-Bold'],
      }
    },
  },
  plugins: [],
}

