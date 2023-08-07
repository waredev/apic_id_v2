/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'arian-bold': ['ArianLTBold'],
        'arian-demi': ['ArianLTDemi']
      },
      backgroundImage: {
        hero: "url('~assets/images/hero-background.png')"
      },
      colors: {
        transparent: 'transparent',
        primary: '#FE0000',
        secondary: '#8b0000',
        'paraph': '#6F6F6F',
        'paraphdark': '#454343',
      }
    },
  },
  plugins: [],
}

