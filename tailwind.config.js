/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorPrimario: "var(--colorPrimario)",
        colorPrimarioHover: "var(--colorPrimarioHover)",
        colorSecundario: "var(--colorSecundario)",
        colorClaro: "var(--colorClaro)",
      },
    },
  },
  plugins: [],
};
