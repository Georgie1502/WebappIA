/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: { DEFAULT: '#d4a843', light: '#e8c06a', dark: '#b8882e' },
        purple: { DEFAULT: '#7c3aed', light: '#9d5cf6' },
        space: { DEFAULT: '#050514', light: '#0d0d2b', card: '#0f0f24' },
        'on-surface': '#eae1d5',
        'on-muted': '#9a8f7d',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
      animation: {
        'portal-spin': 'portalSpin 10s linear infinite',
        'portal-spin-reverse': 'portalSpin 15s linear infinite reverse',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.4s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'fade-in-delay': 'fadeIn 0.8s ease-out 0.3s both',
        'fade-in-delay2': 'fadeIn 0.8s ease-out 0.6s both',
        'scan': 'scan 4s linear infinite',
      },
      keyframes: {
        portalSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scan: {
          '0%': { top: '0%' },
          '100%': { top: '100%' },
        },
      },
    },
  },
  plugins: [],
}
