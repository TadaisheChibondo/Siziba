/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        corporate: "#003893", // The deep blue from the 'ais' text
        vibrant: "#ED1C24", // The bright red from the company name
      },
    },
  },
  plugins: [],
};
