/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/Airbnb/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      width : {
        150 :'600px'
      }
    },
  },
  plugins: [],
}
