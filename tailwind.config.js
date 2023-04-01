/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#FE7F63",
        secondary: "#FFE4E1",
        accent: "#F96140",
        neutral: "#F2F3F9",
        neutral_50: "#ececec",
        dark: "#282e32",
        dark_25: "#c9cbcc",
        darkmode: "#363F45",
        lightmode: "#FFFFFF",
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },

      fontSize: {
        'h1': ['2rem', {
          lineHeight: '1.5',
          letterSpacing: '.05em',
          fontWeight: '700',
        }],
        'h2': ['1.414rem', {
          lineHeight: '1.5',
          letterSpacing: '.05em',
          fontWeight: '600',
        }],
        'h3': ['1.25rem', {
          lineHeight: '1.5',
          fontWeight: '600',
        }],
        'p': ['1rem', {
          lineHeight: '1.5',
          fontWeight: '500',
        }],
        
        'subtext': ['0.75rem', {
          lineHeight: '1.5',
          fontWeight: '400',
        }],
      },
  },
  plugins: [],
}
}
