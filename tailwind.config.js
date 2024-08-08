/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows:{
        'page': '8vh 1fr 4vh',
      },
      backgroundImage: {
        'front-image': "url('/img/spagetti.webp')",
      }
    },
  },
  plugins: [],
}

