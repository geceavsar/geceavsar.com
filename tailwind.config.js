const baseConfig = require("./src/tailwind.config.js");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...baseConfig,
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./content/posts/**/*.{md,markdown,mdx}",
  ],
};
