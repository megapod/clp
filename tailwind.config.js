
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: { heading: ['Playfair Display', 'serif'], body: ['Poppins', 'sans-serif'] },
      colors: {
        primary: "#5b9da4",
        secondary: "#a17aa1",
        neutralbg: "#e8edca",
        accent: "#b4cfb0"
      }
    },
  },
  plugins: [],
}
