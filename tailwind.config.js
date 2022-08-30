const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*{html,js}"],
  content: [],
  theme: {
    colors: {
      ...colors,
    },
  },
};
