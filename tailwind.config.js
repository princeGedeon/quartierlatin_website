/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./resultat.html",],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
