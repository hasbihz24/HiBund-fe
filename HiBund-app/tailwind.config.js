/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          'custom': '#F5497D',
          'hover': '#ff69b4'
        },
      },
      boxShadow: {
        'custom': '3px 3px 0px 0px #2E2F35',
        'hover': '0px 0px 0px 0px'
      },
      borderRadius: {
        'xl': '13px'
      }
    },
  },
  plugins: [],
}

