/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
     'green': 'tail',
     'log': '#e3f8f8',
     'matins': '#234652',
     'build': '#09a098',
     'started': '#d85427',
     'trial': '#55727b',
     'wite': '#ffffff',
     'gray': '#808080'
    },
    fontFamily: {
      gilroy_light: "Url(../Gilroy-FREE/Gilroy-Light.otf)",
      gilroy_bold: "Url(../Gilroy-FREE/Gilroy-Bold.otf)",
    },
    extend: {},
  },
  plugins: [],
}

