/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        "dark-100": "#f9f9f9",
        "dark-200": "#f1f1f4",
        "dark-300": "#dbdfe9",
        "dark-400": "#c4cada",
        "dark-500": "#99a1b7",
        "dark-600": "#788290",
        "dark-700": "#4b5675",
        "dark-800": "#252f4a",
        "dark-900": "#071437",
        "light-gray": "#dddddd",
        "dark-purple": "#111827",
        "light-white": "rgba(255,255,255,0.17)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
