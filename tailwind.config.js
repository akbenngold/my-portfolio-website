/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {colors: {
      'yellow': '#d9b730',}},
  },
  plugins: [require('daisyui'),], 
  daisyui:{
    themes: [],
  },
  darkMode: []
}
