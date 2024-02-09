/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3e7cbd',
      },
      backgroundImage: {
        'clouds': "url('/Images/card.png')",
      },fontFamily: {
        Inter: ['Inter', 'sans-serif'],
       },
    },
  },
  plugins: [],
}