const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Dosis", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#534340",
        "primary-lighter": "#BB9981",
        "bg-primary": "#F4FCD9",
        "bg-primary-darker": "#C5D8A4",
      },
    },
  },
  plugins: [],
};
