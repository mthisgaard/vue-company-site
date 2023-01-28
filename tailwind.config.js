/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/**/*.{html,js,vue,ts}",
    "./src/components/**/*.{html,js,vue,ts}",
  ],
  purge: [
    "./src/views/**/*.{html,js,vue,ts}",
    "./src/components/**/*.{html,js,vue,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
