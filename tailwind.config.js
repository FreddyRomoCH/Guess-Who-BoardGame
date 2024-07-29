/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'board': 'repeat(auto-fit, minmax(100px, 1fr))',
      },
      boxShadow: {
        'question': '10px 10px 5px -2px rgb(0 0 0 / 0.25)'
      }
    },
  },
  plugins: [],
}

