/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          "100": "#f7fcff",
          "200": "rgba(4, 4, 4, 0)",
          "300": "rgba(16, 28, 65, 0.03)",
          "400": "rgba(255, 255, 255, 0.47)",
          "500": "rgba(4, 4, 4, 0.6)",
          "600": "rgba(0, 0, 0, 0.4)",
        },
        "white-base": "#fff",
        ntblack: "#040404",
        black: "#000",
        darkslategray: {
          "100": "#383838",
          "200": "#333",
          "300": "rgba(51, 51, 51, 0.09)",
        },
        "base-blue": "#3a96ad",
        skyblue: "#54b0c7",
        whitesmoke: "#efefef",
        silver: "#c9c9c9",
      },
      spacing: {},
      fontFamily: {
        outfit: "Outfit",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
      },
      borderRadius: {
        "3xs": "10px",
        "11xl": "30px",
        "42xl": "61px",
        "13xl": "32px",
      },
    },
    fontSize: {
      base: "16px",
      sm: "14px",
      xs: "12px",
      "5xl": "24px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
