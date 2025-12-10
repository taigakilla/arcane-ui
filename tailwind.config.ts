import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        arcane: {
          dark: '#0F172A',
          darker: '#020617',
          blue: {
            DEFAULT: '#1E40AF',
            light: '#3B82F6',
            dark: '#1E3A8A',
          },
          gold: {
            DEFAULT: '#F59E0B',
            light: '#FCD34D',
            dark: '#D97706',
          },
          purple: '#8B5CF6',
          slate: {
            700: '#334155',
            800: '#1E293B',
            900: '#0F172A',
          },
        },
      },
      boxShadow: {
        'arcane-glow': '0 0 20px rgba(251, 191, 36, 0.3)', // Glow dourado
        'arcane-glow-blue': '0 0 20px rgba(59, 130, 246, 0.3)', // Glow azul
        'arcane-glow-strong': '0 0 30px rgba(251, 191, 36, 0.5)', // Glow forte
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(251, 191, 36, 0.6)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
