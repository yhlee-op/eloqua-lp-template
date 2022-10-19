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
      'marquee-desktop': "url('https://images.ctfassets.net/7aadcbvnq1uv/17qqlmR3hk480mixv00fXA/2d7d8aa2e2a84902a45b060b0e685a85/cloud-sec-header.jpg?h=400&w=2200')",
      'marquee-mobile': "url('https://images.ctfassets.net/7aadcbvnq1uv/7cl2xeHmZ4J2TAuty4iPYy/0313e2539f8156c9722d230519218ccc/cloud-sec-header-mobile.jpg')"
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
