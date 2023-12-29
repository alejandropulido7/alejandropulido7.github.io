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
      'primary-opacity': '#82d2d27e',
      'secundary': '#0D1B1E',
      'white': '#FFFFFF',
      'black': '#000000'
    }
  },
  plugins: [],
}

