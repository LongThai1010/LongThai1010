/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',

  content:  [
    './*.html', './*.{js,jsx,ts,tsx,vue}',
  ],  

  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        35: '35px',
        50: '50px',
        15: '15px',
        '15': '3.75rem',
        '128': '32rem',
        '144': '36rem',
      },

      colors: {
          gray333: "#333", 
      }

    },
  },

  plugins: [],
}
