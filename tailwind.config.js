/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        oliva: '#7e7d23',
        mokka: '#724c35',
        beige: '#bcab91',
        latte: '#d4a374',
        tostado: '#3d2f2f',
        arena: '#f7efe4',
        gris: '#cacac0',
      },
      fontFamily: {
        grotesque: ['"Bricolage Grotesque"', 'sans-serif'],
        amiri: ['"Amiri"', 'serif'],
      },
    },
     keyframes: {
    'fade-in-up': {
      '0%': { opacity: '0', transform: 'translateY(20px)' },
      '100%': { opacity: '1', transform: 'translateY(0)' },
    },
  },
  animation: {
    'fade-in-up': 'fade-in-up 1s ease-out forwards',
  },
  },
  plugins: [],
}

