/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Press Start 2P"', "cursive"],
        sans: ["Rajdhani", "sans-serif"],
      },
    },
  },
  plugins: [],
};
