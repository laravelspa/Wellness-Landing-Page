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
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      colors: {
        'gold': '#d6ad60',
        'green': '#122620',
        'white': '#f4ebd0',
        'darkGold': '#b68d40'
      },
      backgroundImage: {
        'wallpaper': "url('~@/static/img/header/wallpaper2.png')",
        'one': "url('~@/static/img/header/11.png')",
        'pattern': "url('~@/static/img/pattern.png')",
        'frame': "url('~@/static/img/bestOf/products-frame.png')",
        'bottom': "url('~@/static/img/bottom.png')",
        'side': "url('~@/static/img/footer/side.png')",
        'hands': "url('~@/static/img/footer/hands.png')",
      },
    }
  },
  plugins: [],
}