/** @type {import('tailwindcss').Config} */
module.exports = {
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

