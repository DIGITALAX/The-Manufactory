/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        gen: "Gennaro",
        break: "Break Regular",
        clashM: "Clash Display M",
        clashB: "Clash Display B",
        herm: "Hermano",
      },
      colors: {
        offBlack: "#111313",
        azul: "#2ABDF6",
      },
      width: {
        100: "40rem",
      },
    },
  },
  plugins: [],
};
