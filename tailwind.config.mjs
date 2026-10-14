import { Outfit, Ovo } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#fdf2f8',
          DEFAULT: '#a12a78',
          dark: '#831843',
        },
        coral: {
          DEFAULT: '#d04c36',
          dark: '#b53b26',
        },
        lightHover: '#f8fafc',
        lightCard: '#ffffff',
        darkHover: '#131c31',
        darkCard: '#0f172a',
        darkTheme: '#090d16',
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Jakarta: ["Plus Jakarta Sans", "Outfit", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 10px 30px -10px rgba(0, 0, 0, 0.05), 0 2px 10px -2px rgba(0, 0, 0, 0.03)',
        'glow': '0 0 40px -5px rgba(161, 42, 120, 0.25)',
        'glow-coral': '0 0 40px -5px rgba(208, 76, 54, 0.25)',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit,minmax(200px,1fr))'
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
};
