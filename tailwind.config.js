/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        corporate: "#0f172a", // Dark blue for Tech
        vibrant: "#e11d48", // Energetic red/pink for Media
      },
    },
  },
  plugins: [],
};
