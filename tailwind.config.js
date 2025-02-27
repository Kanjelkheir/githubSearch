/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // or 'class'
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
        'gradient-to-l': 'linear-gradient(to left, var(--tw-gradient-stops))',
      },
      colors: {
        'gradient-start': '#ff7e5f',
        'gradient-end': '#feb47b',
        'dark-bg': '#1a202c',
      },
    },
  },
  plugins: [],
}