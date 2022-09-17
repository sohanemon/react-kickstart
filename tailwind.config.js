const newLocal = "daisyui";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/daisyui/dist/**/*.js",
    "node_modules/react-daisyui/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#fb7185",

          secondary: "#fcc2e5",

          accent: "#ec1eff",

          neutral: "#121B21",

          "base-100": "#283458",

          info: "#539EDF",

          success: "#289F81",

          warning: "#9D7F06",

          error: "#F35373",
        },
      },
    ],
  },
  plugins: [require(newLocal)],
};
