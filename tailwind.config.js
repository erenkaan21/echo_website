/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui"],
      },
      colors: {
        navy: '#1a223f',
        purple: '#3a1c5c',
        ethereal: '#a18cd1',
        dreamy: '#fbc2eb',
        accent: '#e0e6f7',
      },
      backgroundImage: {
        'gradient-main': 'linear-gradient(120deg, #1a223f 0%, #3a1c5c 100%)',
      },
      boxShadow: {
        dreamy: '0 4px 32px 0 rgba(161, 140, 209, 0.25)',
      },
    },
  },
  plugins: [],
};
