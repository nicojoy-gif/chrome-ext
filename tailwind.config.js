/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{html,js}", "./*.{html, js}", "./component/**/*.{html,js}"], 
  theme: {
    extend: {
      colors:{
        'textblue': '#100A42',
        'bluetwo': '#120B48',
        'herotext': '#141414',
        'textgray': '#616163',
        'check': '#1B233D',
        'lightgray': '#434343',
        'lightergray': '#B9C2C8',
        'searchborder': '#E7E7ED',
        'search': '#B6B3C6',
        'searchtext': '#C3C3C3',
        'primary': '#120B23',
        'modal': '#F2F4F7',
      },
    },
  },
  plugins: [],
}

