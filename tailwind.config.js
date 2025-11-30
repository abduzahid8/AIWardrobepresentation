/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: "#bc42f5",
        dark: "#1b1633",
      },
      fontFamily: {
        display: ["DM Serif Display", "serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}