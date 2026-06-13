/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FEFCF9',
          100: '#FAF7F2',
          200: '#F5F0E8',
          300: '#EDE5D8',
          400: '#E0D5C4',
          500: '#C9BAA5',
        },
        warm: {
          900: '#1A1715',
          800: '#2D2926',
          700: '#403B36',
          600: '#5C5550',
          500: '#7A726B',
          400: '#9B9289',
          300: '#B8AFA6',
        },
        accent: {
          DEFAULT: '#C4653A',
          light: '#D4845F',
          dark: '#A3512D',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Newsreader', 'Georgia', 'serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'heading-1': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'heading-2': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'heading-3': ['1.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'body-lg': ['1.125rem', { lineHeight: '1.7' }],
        'body': ['1rem', { lineHeight: '1.7' }],
        'body-sm': ['0.875rem', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
}
