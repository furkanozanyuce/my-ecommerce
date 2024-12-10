/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        128: "32rem", // 512px
        160: "40rem", // 640px
        192: "48rem", // 768px
      },
    },
    fontFamily: {
      "monts": ['sans-serif', "Montserrat"],
    }
  },
  plugins: [],
}

