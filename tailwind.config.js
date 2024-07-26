/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'board': 'repeat(auto-fit, minmax(80px, 1fr))',
      },
    },
  },
  plugins: [],
}

