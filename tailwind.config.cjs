/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        // https://tailwindcss.com/docs/font-family
        // sans, serif, mono are ui defaults.
        display: ["Trebuchet", "sans-serif"],
        body: ['"Arial"', "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      // "light",
      // "dark",
      {
        mytheme: {
          primary: "#00d8fc",
          secondary: "#6a7a04",
          accent: "#2d22f9",
          neutral: "#374151",
          "base-100": "#f3f4f6",
          info: "#7e95e2",
          success: "#176949",
          warning: "#99520b",
          error: "#dc2626",
        },
      },
    ],
  },
};
