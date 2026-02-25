/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'deep-black': '#030308',
        'dark-blue': '#0a0f1a',
        'navy': '#0f1b2e',
        'blue-light': '#1e3a5f',
        'blue-accent': '#3b82f6',
        'gold': '#b8941f',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
