/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        iceland: ["Iceland", "sans-serif"],
      },
      colors: {
        default: "#000000",
      },
      textColor: {
        DEFAULT: "#FFFFFF",
      },
      backgroundColor: {
        DEFAULT: "#000000",
      },
      keyframes: {
        floatAndFade: {
          "0%": {
            transform: "translateY(100vh) translateX(0px)",
            opacity: "0.3",
          }, // Start from bottom of the screen
          "25%": {
            transform: "translateY(75vh) translateX(-10px)",
            opacity: "0.4",
          },
          "50%": {
            transform: "translateY(50vh) translateX(10px)",
            opacity: "0.6",
          },
          "75%": {
            transform: "translateY(25vh) translateX(-10px)",
            opacity: "0.9",
          },
          "100%": { transform: "translateY(0) translateX(0px)", opacity: "1" }, // Final position
        },
        logoRotateAndMove: {
          "0%": { transform: "rotate(0deg) translate(0, 0)", opacity: "1" },
          "70%": { transform: "rotate(360deg) translate(0, 0)", opacity: "1" },
          "100%": {
            transform: "rotate(720deg) translate(200%, -200%)",
            opacity: "0",
          },
        },
      },
      animation: {
        floatAndFade: "floatAndFade 5s ease-in-out forwards ",
        logoRotateAndMove: "logoRotateAndMove 3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
