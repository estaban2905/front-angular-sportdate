/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        coral: {
          100: '#FFE8E8',
          600: '#E53535',
        },
        brand: {
          DEFAULT: '#FF6B6B',
          light: '#FF8E8E',
        },
        dark: {
          bg:      '#0F0F1A',
          card:    '#1A1A2E',
          card2:   '#22223A',
          border:  '#2D2D4A',
        },
      },
      animation: {
        'fade-in': 'card-in 0.3s ease both',
        'bounce-in': 'bounce-in 0.4s cubic-bezier(0.175,0.885,0.32,1.275) both',
      },
      keyframes: {
        'bounce-in': {
          '0%':   { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)',   opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
