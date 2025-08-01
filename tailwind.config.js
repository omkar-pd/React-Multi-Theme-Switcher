module.exports = {
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['Pacifico', 'cursive'],
      },
      backgroundImage: {
        'colorful-gradient': 'linear-gradient(90deg, #f472b6 0%, #facc15 50%, #34d399 100%)',
      },
    },
  },
  plugins: [],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/index.css"
  ],
}
