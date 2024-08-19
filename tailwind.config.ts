// tailwind.config.js

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        myBlue: "#3C486B",
        OffWhite: "#FAF9F6",
        myOrenge: "#fd7014",
        myBlackHead: "#222831",
        myBlackPara: "#393e46",
        Coffee1: "#BCA37F",
        Coffee2: "#3E3232",
        Coffee3: "#ccc7b3",
        Beige: '#F5F5DC',
        Cornsilk: '#FFF8DC',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require('daisyui'),
    require("tailwindcss-animate"),
  ],
};

export default config;
