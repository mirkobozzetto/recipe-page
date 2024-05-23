/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        nutmeg: "hsl(14, 45%, 36%)",
        darkrapberry: "hsl(332, 51%, 32%)",
        white: "hsl(0, 0%, 100%)",
        roseWhite: "hsl(330, 100%, 98%)",
        eggshell: "hsl(30, 54%, 90%)",
        lightGrey: "hsl(30, 18%, 87%)",
        wengeBrown: "hsl(30, 10%, 34%)",
        darkCharcoal: "hsl(24, 5%, 18%)",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        young: ["Young Serif", "serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
