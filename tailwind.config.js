/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      colors:{
        "primario": "#5E9E82",
        "segundo": "#175A55",
        "terciario": "#F1EBE2",
        "cuarto": "#E1B5AC",
      }
    },
  },
  plugins: [],
}

