/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1D3557',
        secondary: '#E63946',
        accent: '#F1FAEE',
        highlight: '#A8DADC',
        contrast: '#457B9D',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        accent: ['Playfair Display', 'serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'scale-in': 'scaleIn 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'slide-in-right': 'slideInRight 0.8s ease-out forwards',
        'shimmer': 'shimmer 3s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      boxShadow: {
        'premium': '0 20px 40px rgba(29, 53, 87, 0.15)',
        'glow': '0 0 20px rgba(230, 57, 70, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};