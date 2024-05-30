/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      sans: ["Open Sans", "sans-serif"],
    },
  },
  plugins: [],
  important: true,
};
