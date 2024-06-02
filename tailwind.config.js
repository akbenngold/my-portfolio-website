/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {colors: {
      'yellow': '#5a03fc',}},
  },
  plugins: [require('daisyui'),], 
  daisyui:{
    themes: [],
  },
  darkMode: []
}
