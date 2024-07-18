/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        calculatorBg: "#242530",
        calculatorNumerPad: "#404258",
        calculationPad: "#F49D1A",
        calculatorResultBtn: "#B2B2B2",
        calculatorResultView: "#3A3F77",
        dicomTiltle: "#697077",
        dicomArrowBtn: "#0F62FE",
        dicomLine: "#0F62FE",
        dicomTitle: "#697077",
      },
      boxShadow: {
        "custom-dark": "0 4px 6px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
