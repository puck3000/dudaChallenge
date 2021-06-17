module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'main-blue': '#0C1D35',
        'cancer-green': '#26FF00',
        'darker-cancer-green': '#1bb300',
        'slight-grey': '#FFFFFF52',
      },
      maxWidth: {
        wrapper: '814px',
      },
    },
  },
  variants: {
    extend: {
      margin: ['last'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
