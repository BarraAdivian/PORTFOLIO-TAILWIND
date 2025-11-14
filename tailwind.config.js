/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        warnautama: "#E63515",
      },
      animation: {
        bounce: "bounce 0.3s infinite",
      },
    },
  },
  plugins: [],
};
