/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A', // Dark navy from images
        gold: '#FFC107',    // Gold/Yellow from logo/button
        'gold-hover': '#E5A100',
      },
      backgroundImage: {
        'hero-pattern': "url('/hero-bg.jpg')",
      }
    },
  },
  plugins: [],
}
