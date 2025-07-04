import forms from '@tailwindcss/forms';
import scrollbarHide from 'tailwind-scrollbar-hide'; // <<<<< Importe o plugin aqui

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'page-background': '#F9F8FE',
      },
    },
  },
  plugins: [
    forms,
    scrollbarHide, 
  ],
};
