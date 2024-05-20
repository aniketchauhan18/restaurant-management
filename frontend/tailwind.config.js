/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px", // Small screens, 640px and up
      md: "768px", // Medium screens, 768px and up
      lg: "1024px", // Large screens, 1024px and up
      xl: "1280px", // Extra large screens, 1280px and up
      "2xl": "1536px", // Double extra large screens, 1536px and up
      "custom-md": { max: "500px" }, // Custom breakpoint for maximum width 500px
    },
    extend: {
      backgroundImage: {
        "menu-bg":
          "url('https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      },
      colors: {
        primary: {
          dark: "#CC00CC",
          DEFAULT: "red",
        },
        scarlet: {
          50: "#fff4ec",
          100: "#ffe7d3",
          200: "#ffcaa5",
          300: "#ffa56d",
          400: "#ff7432",
          500: "#ff4e0a",
          600: "#ff3300",
          700: "#cc2002",
          800: "#a11b0b",
          900: "#82190c",
          950: "#460904",
        },
        'golden-tainoi': {
          '50': '#fff8eb',
          '100': '#ffebc6',
          '200': '#ffcb6b',
          '300': '#ffba4a',
          '400': '#ff9f20',
          '500': '#f97a07',
          '600': '#dd5602',
          '700': '#b73806',
          '800': '#942a0c',
          '900': '#7a240d',
          '950': '#461002',
        },
        'storm-dust': {
          '50': '#f6f6f6',
          '100': '#e7e7e7',
          '200': '#d1d1d1',
          '300': '#b0b0b0',
          '400': '#888888',
          '500': '#6d6d6d',
          '600': '#616161',
          '700': '#4f4f4f',
          '800': '#454545',
          '900': '#3d3d3d',
          '950': '#262626',
        },
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        mukta: ["Mukta", "sans-serif"],
        inter: ['Inter', 'sans-serif'],
        "chakra-petch": ['"Chakra Petch"', "sans-serif"],
      },
      fontWeight: {
        "extra-light": 200,
        light: 300,
        normal: 400,
        medium: 500,
        "semi-bold": 600,
        bold: 700,
        "extra-bold": 800,
        black: 900,
      },
      fontSize: {
        "9xl": "72px",
      },
    },
    plugins: [],
  },
};
