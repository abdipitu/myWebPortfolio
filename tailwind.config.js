/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',

  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter'],
        'poppins': ['Poppins'],
        'mulish': ['Mulish'],
        'outfit': ['Outfit'],
        'sora': ['Sora'],
        'instrumental': ['Instrument Serif'],
        'geist': ['Geist']
      },
      colors: {
        'web' : '#dadbdc',
        'primary' : '#e5e5e5',
        'secondary' : '#252525',
        'tertiary' : '#737373',
      }
    },
  },
  plugins: [],
}

