/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          80: "#121221",
          60: "#444444",
          40: "#6C6C6C",
          20: "#949494",
        },
        white: {
          80: "#FDFDFD",
          60: "#F8F8F8",
        },
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        playfair: ["Playfair Display SC", "serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};
