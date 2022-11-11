/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./*.html", "./*.js"],
  content: [],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    backgroundImage: {
      'marquee-desktop': "url('https://3396890.fs1.hubspotusercontent-na1.net/hubfs/3396890/Pelco/Landing%20Pages/Fixed/Prospecting/1.%20Web%20Landing%20Page%201440x600%20Fixed%20Prospecting%20Network.jpg')",
      'marquee-mobile': "url('https://3396890.fs1.hubspotusercontent-na1.net/hubfs/3396890/Pelco/Landing%20Pages/Fixed/Prospecting/1.%20Web%20Landing%20Page%20420x576%20Fixed%20Prospecting%20Network.jpg')"
    },
    extend: {
      colors: {
        'primary':'#00729D',
        'secondary':'#085B7D',
        'tertiary':'#242A35',
        'ctaDivider': '#060808'
      },
      spacing: {
        '100': '25rem',
        '120': '30rem',
        '144': '36rem'
      },
      minHeight: {
        '72':'18rem',
        '96':'24rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
