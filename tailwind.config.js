/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        'primary-dark': '#1d4ed8',
        surface: '#ffffff',
        'surface-variant': '#f8fafc',
        'on-surface': '#0f172a',
        'on-surface-variant': '#475569',
        'outline-variant': '#e2e8f0',
        'dark-navy': '#020617',
      },
      borderRadius: {
        DEFAULT: '12px',
        lg: '16px',
        xl: '24px',
        full: '9999px',
      },
      spacing: {
        md: '20px',
        xl: '40px',
        lg: '32px',
        '2xl': '64px',
        '3xl': '120px',
        gutter: '24px',
        'margin-mobile': '20px',
        'margin-desktop': '48px',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
