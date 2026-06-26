import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        serif: ['Source Serif 4', 'Georgia', 'serif']
      },
      colors: {
        ink: {
          50: '#f8fafc',
          100: '#f1f5f9',
          500: '#64748b',
          700: '#334155',
          900: '#0f172a'
        },
        signal: {
          blue: '#2563eb',
          teal: '#0f766e',
          gold: '#b7791f',
          rose: '#be123c'
        }
      },
      boxShadow: {
        soft: '0 18px 60px rgba(15, 23, 42, 0.08)'
      },
      backgroundImage: {
        'academic-grid':
          'linear-gradient(rgba(37, 99, 235, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 118, 110, 0.08) 1px, transparent 1px)'
      }
    }
  },
  plugins: []
} satisfies Config;
