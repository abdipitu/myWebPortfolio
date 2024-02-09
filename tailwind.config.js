/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: ["./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter'],
        'poppins': ['Poppins'],
        'mulish': ['Mulish'],
      },
      colors: {
        'web' : '#dadbdc',
      }
    },
  },
  plugins: [],
}

