/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'menu-bg': "url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      },
      colors: {
        primary: {
          dark: "#CC00CC",
          DEFAULT: "red"
        },
        scarlet: {
          '50': '#fff4ec',
          '100': '#ffe7d3',
          '200': '#ffcaa5',
          '300': '#ffa56d',
          '400': '#ff7432',
          '500': '#ff4e0a',
          '600': '#ff3300',
          '700': '#cc2002',
          '800': '#a11b0b',
          '900': '#82190c',
          '950': '#460904',
        }
      },
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