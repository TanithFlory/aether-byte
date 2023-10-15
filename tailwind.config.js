/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "var(--clr-primary)",
      "primary-opaque": "var(--clr-primary-opaque)",
      secondary: "var(--clr-secondary)",
      "clr-text": "var(--clr-text)",
      white: "var(--clr-white)",
      black: "var(--clr-black)",
      darkblue: "var(--clr-darkblue)",
      lightGreen: "var(--clr-l-green)",
      purple: "var(--clr-purple)",
      gray: "var(--clr-gray)",
      hover: "var(--clr-hover)",
    },
    fontSize: {
      "fs-100": "var(--fs-100)",
      "fs-200": "var(--fs-200)",
      "fs-300": "var(--fs-300)",
      "fs-400": "var(--fs-400)",
      "fs-500": "var(--fs-500)",
      "fs-600": "var(--fs-600)",
      "fs-700": "var(--fs-700)",
      "fs-800": "var(--fs-800)",
      "lh-custom": "var(--lh-custom)",
    },
    extend: {
      keyframes: {
        clipPath: {
          "0%": { "clip-path": " circle(10% at 50% 50%)" },
          "100%": { "clip-path": " circle(45% at 50% 50%)" },
        },
      },
      animation: {
        clipPath: "clipPath 0.4s ease-in",
      },
    },
  },
  plugins: [],
};
