/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {colors: {
      'yellow': '#fcfc51',}},
  },
  plugins: [require('daisyui'),],
}