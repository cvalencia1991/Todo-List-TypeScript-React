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
        'icon-check': "url('/public/images/icon-check.svg')",
      },
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif'],
      },
      screens: {
        'mobile': '375px',
        'desktop': '1440px',
      },
      colors: {
        'dark': 'hsl(235, 21%, 11%)',
        'very-dark-blue': 'hsl(233, 47%, 7%)',
        'dark-desaturated-blue': 'hsl(244, 38%, 16%)',
        'soft-violet': 'hsl(277, 64%, 61%)',
        'white': 'hsl(0, 0%, 100%)',
        'grayish-blue': 'hsl(244, 38%, 16%)',
        'light-grayish-blue': 'hsl(240, 75%, 98%)',
        'very-light-gray': 'hsl(0, 0%, 98%)',
      },
    },
  },
  plugins: [],
};