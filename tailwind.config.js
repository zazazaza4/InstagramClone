/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          950: 'rgba(38,38,38,0.2)',
        },
      },
      width: {
        '975': '975px',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
