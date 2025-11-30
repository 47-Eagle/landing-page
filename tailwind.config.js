/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'eagle-gold': {
          DEFAULT: 'var(--eagle-gold)',
          soft: 'var(--eagle-gold-soft)',
          light: 'var(--eagle-gold-light)',
          dark: 'var(--eagle-gold-dark)',
          darker: '#A69348',
        },
        'neo-bg': {
          light: '#f8fafc',
          dark: '#0a0a0a',
        },
      },
      boxShadow: {
        'neo-raised': '8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.9)',
        'neo-pressed': 'inset 4px 4px 8px rgba(0, 0, 0, 0.1), inset -4px -4px 8px rgba(255, 255, 255, 0.9)',
        'neo-hover': '12px 12px 24px rgba(0, 0, 0, 0.15), -12px -12px 24px rgba(255, 255, 255, 0.95)',
        'neo-glow': '0 0 20px rgba(242, 213, 124, 0.3), 0 0 40px rgba(242, 213, 124, 0.2)',

        'neo-raised-dark': '8px 8px 16px rgba(0, 0, 0, 0.3), -8px -8px 16px rgba(255, 255, 255, 0.05)',
        'neo-pressed-dark': 'inset 4px 4px 8px rgba(0, 0, 0, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.05)',
        'neo-hover-dark': '12px 12px 24px rgba(0, 0, 0, 0.4), -12px -12px 24px rgba(255, 255, 255, 0.08)',
        'neo-glow-dark': '0 0 20px rgba(255, 231, 163, 0.3), 0 0 40px rgba(255, 231, 163, 0.2)',

        'neo-raised-lift': '16px 16px 32px rgba(0, 0, 0, 0.2), -16px -16px 32px rgba(255, 255, 255, 0.95)',
        'neo-raised-lift-dark': '16px 16px 32px rgba(0, 0, 0, 0.4), -16px -16px 32px rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
