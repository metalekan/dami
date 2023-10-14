/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      gray: "#fb8b24",
      white: "#f1faee",
      cyan: "#121113",
      black: "#02010a",
      dimWhite: "#ffecd1",
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
