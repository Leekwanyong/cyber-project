/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['NotoSans', 'sans-serif'],
      },
      screens: {
        custom930: '930px',
      },
    },
  },
  plugins: [],
};
