/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image-cms1': "url('images/bg.jpg')",
      }
    },
    colors: {
      'cms-main-red': '#ac0404',
      'cms-deep-red': '#620404',
      'cms-bright': '#b00404',
      'cms-black':'#050404',
      'white':'#FFFFFF',
      'grey1':'#e1e1e1'
    },
  },
  plugins: [],
}