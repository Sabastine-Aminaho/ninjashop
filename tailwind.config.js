/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'sm': '600px',
      'md': '760px',
      'lg': '1024px',
      'xl': '1280px',
    },
    fontFamily: {
      body: ['Poppins']
    },
  },
  plugins: [],
}

