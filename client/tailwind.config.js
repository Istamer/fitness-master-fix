/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:  theme => ( {
        'fon': "url('../public/img/fon.jpg')",
        'gymfon': "url('../public/img/gymfon.jpg')",
        'exfon': "url('../public/img/exfon.jpg')",
      })
    },
  },
  plugins: [],
}