const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      screens: {
        xs: "576px",
        sm: "768px",
        lg: "992px",
        xl: "1200px",
        "max-sm": { max: "768px" },
      },
    },
  },
  plugins: [
    plugin(function ({ matchVariant }) {
      matchVariant("max", (value) => `@media (max-width: ${value})`);
    }),
  ],
  corePlugins: {
    preflight: false,
  },
};
