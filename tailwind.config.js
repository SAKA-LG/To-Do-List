/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}", // ubah sesuai struktur project kamu
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
