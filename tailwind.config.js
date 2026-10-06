/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          navy: '#0B1F3A',
          slate: '#1E293B',
          blue: '#2563EB',
          sky: '#38BDF8',
        },
        primary: '#0B1F3A',
        secondary: '#2563EB',
        accent: '#16A34A',
        surface: '#F8F9FF',
        'surface-container': '#E5EEFF',
        'on-surface': '#0B1C30',
        'on-surface-variant': '#44474D',
      },
      spacing: {
        gutter: '1.5rem',
        'gutter-mobile': '1rem',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
      },
    },
  },
  plugins: [],
}
