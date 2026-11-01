/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          gold: '#F9A61C',
          'gold-hover': '#E5940F',
          'gold-light': '#FFFBEB',
          navy: '#1E2538',
          'navy-light': '#2A344E',
          dark: '#0F172A',
          charcoal: '#1E293B',
          slate: '#334155',
          muted: '#64748B',
          border: '#E2E8F0',
          canvas: '#F8FAFC'
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
        'dropdown': '0 12px 30px -4px rgba(15, 23, 42, 0.12), 0 4px 6px -2px rgba(15, 23, 42, 0.05)'
      }
    },
  },
  plugins: [],
}
