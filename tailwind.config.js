/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0f',
          800: '#12121a',
          700: '#1a1a27',
          600: '#22223a',
          500: '#2d2d4e',
        }
      },
      backgroundImage: {
        'gradient-purple-blue': 'linear-gradient(135deg, #7c3aed 0%, #2563eb 100%)',
        'gradient-pink-purple': 'linear-gradient(135deg, #ec4899 0%, #7c3aed 100%)',
        'gradient-blue-cyan': 'linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)',
        'gradient-green-teal': 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
        'gradient-orange-pink': 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
      }
    },
  },
  plugins: [],
}
