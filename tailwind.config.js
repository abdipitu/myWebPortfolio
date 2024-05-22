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
        'outfit': ['Outfit'],
      },
      colors: {
        'web' : '#dadbdc',
      }
    },
  },
  plugins: [],
}

