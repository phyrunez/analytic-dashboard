/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#1565D8",
        dark: {
          light: "#5A7184",
          hard: "#0D2436",
          soft: "#183B56"
        },
        background: "#FAFAFA"
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["'Montserrat'", "sans-serif"],
      }
    },
  },
  plugins: [],
}

