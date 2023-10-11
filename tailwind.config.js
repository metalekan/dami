/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      gray: { 100: "#D9D9D9", 200: "#A9A9A9", 300: "#B1B1B1" },
      white: "#FFFFFF",
      cyan: "#016364",
      black: "#212121",
      dimWhite: "rgba(255, 255, 255, 0.7)",
    },
    fontFamily: {
      'nunito': ['Nunito Sans', 'sans-serif']
    },
    fontSize: {
      sm: "14px",
      md: "18px",
      lg: "24px",
      xl: "32px",
      base: "16px"
    }
  },
  plugins: [],
};
