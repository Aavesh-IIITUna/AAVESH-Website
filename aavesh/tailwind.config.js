/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        iceland: ['Iceland', 'sans-serif'],
      },
      colors: {
        default: '#000000',
      },
      textColor: {
        DEFAULT: '#FFFFFF',
      },
      backgroundColor: {
        DEFAULT: '#000000',
      },
    },
  },
  plugins: [],
}

