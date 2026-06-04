/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'DM Sans'", "sans-serif"],
        mono: ["'DM Mono'", "monospace"],
      },
      colors: {
        cbe: {
          50:  "#E1F5EE",
          100: "#9FE1CB",
          200: "#5DCAA5",
          500: "#1D9E75",
          600: "#0F6E56",
          700: "#085041",
          900: "#04342C",
        },
      },
    },
  },
  plugins: [],
}
