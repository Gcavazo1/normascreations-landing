/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#faf5ff', // Lightest lavender
          200: '#e9d8fd', // Light lavender
          300: '#d6bcfa', // Medium lavender
          400: '#b794f4', // Deep lavender
          500: '#9f7aea', // Rich lavender
        },
        accent: {
          100: '#fff5f7', // Light pink
          200: '#fed7e2', // Medium pink
          300: '#ff87b7', // Bright pink
          400: '#3be8e0', // Teal
          500: '#16b4a4', // Deep teal
        },
        neutral: {
          100: '#ffffff', // White
          200: '#f7fafc', // Off white
          300: '#e2e8f0', // Light gray
          400: '#4a5568', // Dark gray
          500: '#1a202c', // Near black
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        rockbilly: ['Rockbilly', 'cursive'],
      },
      textShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.25)',
        'md': '0 2px 4px rgba(0, 0, 0, 0.25)',
        'lg': '0 4px 8px rgba(0, 0, 0, 0.25)',
        'xl': '0 8px 16px rgba(0, 0, 0, 0.25)',
        'none': 'none',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // Add text shadow plugin
    function({ addUtilities, theme }) {
      const textShadows = theme('textShadow');
      const utilities = Object.entries(textShadows).map(([key, value]) => {
        return {
          [`.text-shadow${key === 'none' ? '' : `-${key}`}`]: {
            textShadow: value,
          },
        };
      });
      
      addUtilities(utilities);
    },
  ],
} 