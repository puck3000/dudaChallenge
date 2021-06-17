module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-blue': '#0C1D35',
      },
      maxWidth: {
        wrapper: '814px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
