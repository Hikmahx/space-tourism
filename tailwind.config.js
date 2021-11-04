
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily:{
      belleFair:['"Bellefair"', 'serif'],
      barlow:['"Barlow Condensed"', 'sans-serif']
    },
    colors: {
      'light-blue': '#d0d6f9',
      'very-dark-blue': '#0b0d17',
      'grayish-blue': "#3f4148",
      'white': '#fff'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
