/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "text": "#1f0a19",
        "background": "#faf0f7",
        "primary": "#afe4bc",
        "secondary": "#d9f2ec",
        "accent": "#60bf40",
      }
    },
  },
  plugins: [],
}

