/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{css}'
  ],
  theme: {
    extend: {
      colors: {
        // Overriding emerald/cyan to match the provided reference gradient
        emerald: {
          50: '#f3f6ff',
          100: '#e6eefc',
          200: '#cfe0fb',
          300: '#a8b7ff',
          400: '#809aff',
          500: '#6b8cff',
          600: '#5a6efb',
          700: '#4858d6',
          800: '#3b469e',
          900: '#2e3676',
        },
        cyan: {
          50: '#f0feff',
          100: '#e0fbff',
          200: '#bff7ff',
          300: '#9ff1ff',
          400: '#7ff0ff',
          500: '#6be7ff',
          600: '#47d9ff',
          700: '#2fb0d6',
          800: '#246f9e',
          900: '#18496e',
        },
      },
      // Optional: define a custom gradient stop for convenience
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #6b8cff 0%, #6be7ff 100%)',
      },
    },
  },
  plugins: [],
};
