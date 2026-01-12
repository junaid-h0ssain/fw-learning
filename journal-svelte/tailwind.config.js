/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'mood-happy': '#facc15',
        'mood-grateful': '#ec4899',
        'mood-calm': '#3b82f6',
        'mood-sad': '#64748b',
        'mood-anxious': '#a855f7',
      },
      borderRadius: {
        DEFAULT: '0.625rem',
      },
      spacing: {
        '1.5': '0.375rem',
      },
    },
  },
  plugins: [],
};
