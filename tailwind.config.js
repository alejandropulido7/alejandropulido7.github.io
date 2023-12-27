/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'text': '#FFFFFF',
      'primary': '#82D2D2',
      'secundary': '#0D1B1E',
      'white': '#FFFFFF',
      'black': '#000000'
    }
  },
  plugins: [],
}

