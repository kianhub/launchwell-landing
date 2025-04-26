/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "launch-red": "#E50914",
        "slate-black": "#121212",
        "soft-gray": "#EDEDED",
        "warm-white": "#FAFAFA",
        "accent-yellow": "#FFD700",
      },
    },
  },
  plugins: [],
};
