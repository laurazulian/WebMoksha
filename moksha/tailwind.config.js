/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Helvetica Neue"', "sans-serif"],
      },
      colors: {
        tierra: {
          claro: "#f6f1ec",
          medio: "#d7c4b4",
          oscuro: "#4b3b2b",
        },
      },
    },
  },
  plugins: [],
};
