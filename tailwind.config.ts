import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f2e421',
          dark: '#d4c91e',
          light: '#f5eb4d',
        },
        accent: {
          DEFAULT: '#f97316',
          dark: '#c2410c',
          light: '#fb923c',
        },
        background: {
          DEFAULT: '#1a1a1a',
          dark: '#0f0f0f',
          light: '#2a2a2a',
        },
        foreground: {
          DEFAULT: '#ffffff',
          muted: '#94a3b8',
        },
      },
      fontFamily: {
        'trade-winds': ['var(--font-trade-winds)', 'cursive'],
        'google-sans': ['var(--font-google-sans)', 'sans-serif'],
        oswald: ['var(--font-oswald)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
