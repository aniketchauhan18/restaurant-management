/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'kanit': ['Kanit', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'outfit': ['Outfit', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'chakra-petch': ['"Chakra Petch"', 'sans-serif'],
      },
      fontWeight: {
        'extra-light': 200,
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semi-bold': 600,
        'bold': 700,
        'extra-bold': 800,
        'black': 900,
      },
      fontSize: {
        '9xl': '72px',
      }
    },
  plugins: [],
  }

}