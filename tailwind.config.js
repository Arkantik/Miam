/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FE7F63",
        secondary: "#FFE4E1",
        accent: "#F96140",
        neutral: "#F2F3F9",
        neutral50: "#ececec",
        dark: "#282e32",
        dark25: "#c9cbcc",
        darkmode: "#363F45",
        lightmode: "#FFFFFF",
      },

      fontFamily: {
        sans: ['"Poppins"', "sans-serif"],
      },

      fontSize: {
        "2xl": [
          "2rem",
          {
            lineHeight: "1.5",
            letterSpacing: ".05em",
            fontWeight: "700",
          },
        ],
        xl: [
          "1.414rem",
          {
            lineHeight: "1.5",
            letterSpacing: ".05em",
            fontWeight: "600",
          },
        ],
        lg: [
          "1.25rem",
          {
            lineHeight: "1.5",
            fontWeight: "600",
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.5",
            fontWeight: "500",
          },
        ],
        xs: [
          "0.75rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
        // test of the font for food categories
        xxs: [
          "0.5rem",
          {
            lineHeight: "1.5",
            fontWeight: "400",
          },
        ],
      },
    },
    plugins: [],
  },
};
