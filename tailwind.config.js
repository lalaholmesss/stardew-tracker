/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'lightgray': '#d3e3f5',
        'green': '#03a007',
        'lightblue': '#8dcaf0',
        'darkblue': '#0645ad'
      }
    },
  },
  plugins: [],
}

