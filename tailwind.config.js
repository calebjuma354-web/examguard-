/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          800: '#0b132b',
          900: '#070a14',
        },
        slate: {
          850: '#151f32',
          900: '#0f172a',
        }
      }
    },
  },
  plugins: [],
};
