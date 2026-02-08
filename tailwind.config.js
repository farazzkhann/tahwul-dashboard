/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cairo', 'system-ui', 'sans-serif'],
      },
      colors: {
        'red-accent': '#F50A0A',
        'blue-accent': '#0078D7',
        'dark-blue-accent': '#004479',
        'green-accent': '#1EA54E',
        'yellow-accent': '#F59F0A',
        'gray-accent': '#8597A8',

        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        navy: {
          900: '#1D3557',
          800: '#1e3a5f',
          700: '#2d4a6d',
          600: '#7B9FC3',
        },
        gray: {
          200: '#E0E8ED',
          300: '#F5F8FA',
          600: '#8597A8',
        }

      },
    },
  },
  plugins: [],
}