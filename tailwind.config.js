/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        matisse: {
          50: "#f1f8fe",
          100: "#e2f0fc",
          200: "#bfe0f8",
          300: "#86c9f3",
          400: "#46aeea",
          500: "#1e93d9",
          600: "#0f6ba9",
          700: "#0f5e95",
          800: "#104f7c",
          900: "#134367",
          950: "#0d2b44",
        },
      },
    },
  },
  plugins: [],
};
