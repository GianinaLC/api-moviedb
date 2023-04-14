/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {//mas oscuro a mas claro
        'n': '#0F2624',
        'a-1': '#48594E',
        'a-2': '#D9D9D9',
        'a-3': '#A69A60',
        'a-4': '#BF7C41',
      }
    },
    fontFamily: {
      'montserrat': ['Montserrat'],
      'roboto': ['Roboto']
    }
  },
  plugins: [],
}

