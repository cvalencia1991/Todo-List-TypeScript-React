/* eslint-disable quotes */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'desktop-light': "url('/public/images/bg-desktop-light.jpg')",
        'desktop-dark': "url('/public/images/bg-desktop-dark.jpg')",
        'mobile-light': "url('/public/images/bg-mobile-light.jpg')",
        'mobile-dark': "url('/public/images/bg-mobile-dark.jpg')",
      },
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif'],
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
    },
  },
  plugins: [],
};