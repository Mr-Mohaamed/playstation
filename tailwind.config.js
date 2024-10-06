/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "865px",
      },
      backgroundImage: {
        "game-image1": "url('/src/assets/1.jpg')",
        "game-image2": "url('/src/assets/2.jpg')",
        "game-image3": "url('/src/assets/3.jpg')",
      },
    },
  },
  plugins: [],
};
