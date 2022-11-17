/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

        'image-cms1': "url('images/bg.jpg')",
        'wedding': "url('images/undraw_wedding_re_66hj.svg')",
        'instaram': "url('images/undraw_social_influencer_re_beim.svg')",
        'occation': "url('images/undraw_festivities_tvvj.svg')",
        'corporate': "url('images/undraw_interview_re_e5jn.svg')",
        'hotel': "url('images/undraw_building_re_xfcm.svg')",
      }
    },
    colors: {
      'cms-main-red': '#ac0404',
      'cms-deep-red': '#620404',
      'cms-bright': '#b00404',
      'cms-black':'#050404',
      'white':'#FFFFFF',
      'grey1':'#e1e1e1',
      'dark-grey':'#636e72'
    },
  },
  plugins: [],
}