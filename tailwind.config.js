import lineClamp from '@tailwindcss/line-clamp'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        pink: {
          blush: '#FFB3C7',
          rose: '#FF4D8D',
          lavender: '#FFF0F5',
          accent: '#FF1654',
          light: '#FFE8EC',
          dark: '#CC0033',
          rouge: '#990033',
        },
        violet:{
          blush: '#E9D5FF',
          rose: '#C084FC',
          lavender: '#A78BFA',
          accent: '#8B5CF6',
          light: '#DDD6FE',
          dark: '#6D28D9',
          rouge: '#5B21B6',
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
        'softer': '0 10px 40px -15px rgba(0, 0, 0, 0.05)',
      },
      borderWidth: {
        '6': '6px',
      },
    },
  },
  plugins: [
  
],
};