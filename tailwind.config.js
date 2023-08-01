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
      secondary: "var(--clr-secondary)",
      "clr-text": "var(--clr-text)",
      white: "var(--clr-white)",
      black: "var(--clr-black)",
      darkblue: "var(--clr-darkblue)",
      lightGreen: "var(--clr-l-green)",
    },
    fontSize: {
      "fs-200": "var(--fs-200)",
      "fs-300": "var(--fs-300)",
      "fs-400": "var(--fs-400)",
      "fs-500": "var(--fs-500)",
      "fs-600": "var(--fs-600)",
      "fs-700": "var(--fs-700)",
      "fs-800": "var(--fs-800)",
      "lh-custom": "var(--lh-custom)",
    },
  },
  plugins: [],
};
