/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  important: "#__next",
  theme: {
    extend: {
      colors: {
        yellow: {
          500: "#f9f4c6",
        },
      },
    },
  },
  plugins: [],
};
