/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor:"#2C3574",
        seconderyYellow:"#2FA5E0",
        normalbg:"#2c35741c",
      },
      fontFamily:{
        poppins: ['Poppins', 'sans-serif'], 
        assistance:['Assistant', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
