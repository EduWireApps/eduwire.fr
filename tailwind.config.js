const defaultTheme = require("./node_modules/tailwindcss/defaultTheme");
const colors = require("./node_modules/tailwindcss/colors");

module.exports = {
  purge: [
    "./components/**/*.{vue,js}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  darkMode: false, // media or class
  theme: {
    extend: {
      colors: {
        space: {
          DEFAULT: "#252B62",
          "50": "#A6ABDD",
          "100": "#9298D6",
          "200": "#6972C6",
          "300": "#444FB3",
          "400": "#343D8B",
          "500": "#252B62",
          "600": "#1E234F",
          "700": "#171B3D",
          "800": "#10132A",
          "900": "#090B18"
        },
        pna: {
          DEFAULT: "#29826C",
          "50": "#ACE5D7",
          "100": "#98DFCD",
          "200": "#72D2BA",
          "300": "#4BC6A8",
          "400": "#35A98C",
          "500": "#29826C",
          "600": "#1E5F4F",
          "700": "#133C32",
          "800": "#081915",
          "900": "#000000"
        },
        primary: colors.emerald,
        secondary: colors.teal
      },
      fontFamily: {
        sans: ["Nunito Sans", ...defaultTheme.fontFamily.sans],
        title: ["Josefin Sans", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [require("tailwindcss-textshadow")]
};
