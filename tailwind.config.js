/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "mb": "375px",
      "dk": "1440px"
    },
    colors: {
      "very_light_gray": "hsl(236, 33%, 92%)",
      "very_light_grayish_blue": "hsl(236, 33%, 92%)",
      "light_grayish_blue": "hsl(233, 11%, 84%)",
      "dark_grayish_blue": "hsl(236, 9%, 61%)",
      "very_dark_grayish_blue": "hsl(235, 19%, 35%)",
      "very_dark_blue": "hsl(235, 21%, 11%)",
      "blue": "hsl(235, 24%, 19%)",
      "lighjt_grayish_blue": "hsl(234, 39%, 85%)",
      "light_grayish_blue_hover": "hsl(236, 33%, 92%)",
      "very_dark_grayish_blue_hover": "hsl(233, 14%, 35%)",
      "very_dark_grayish_blue_hover_2": "hsl(237, 14%, 26%)",
    },
  },
  extend: {
    backgroundImage: {
      "desk-light": "url('/src/images/bg-desktop-light.jpg')",
      "desk-dark": "url('/src/images/bg-desktop-dark.jpg')",
      "mobile-light": "url('/images/bg-mobile-light.jpg')",
      "mobile-dark": "url('/images/bg-mobile-dark.jpg')",
    },
  },
  plugins: [],
};