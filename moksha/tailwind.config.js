/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tierra: {
          claro: "#dbc9bc",
          medio: "#d9b177",
          oscuro: "#213f56",
        },
      },
      fontFamily: {
        sans: ["Noir Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
}
