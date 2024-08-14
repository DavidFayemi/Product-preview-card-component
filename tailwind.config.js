/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      screens: {
        mobile: "375px",
        desktop: "1440px",
      },
      fontFamily: {
        primary: "Montserrat",
        secondary: "Fraunces",
      },
      fontSize: {
        s: "0.875rem",
      },
      colors: {
        "primary-dark-cyan": "hsl(158, 36%, 37%)",
        "primary-dark-cyan-hover": "hsl(158, 36%, 17%)",
        "primary-cream": "hsl(30, 38%, 92%)",
        "neutral-very-dark-blue": "hsl(212, 21%, 14%)",
        "neutral-dark-grayish-blue": "hsl(228, 12%, 48%)",
      },
      letterSpacing:{
        huge:'0.25em',
      }
    },
  },
  plugins: [],
};
