/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F0',
        olive: '#4C6B4A',
        terracotta: '#D17A57',
        sage: '#C3D6B5',
        sand: '#EADDC9',
        charcoal: '#333333',
      },
    },
  },
  plugins: [],
}
