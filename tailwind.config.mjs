/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // PochiGO brand palette — derived from logo
        pochi: {
          50:  '#F5F3FF',
          100: '#EDE9FE',
          200: '#DDD6FE',
          300: '#C4B5FD',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED', // primary
          700: '#6D28D9',
          800: '#5B21B6',
          900: '#4C1D95',
          950: '#2E1065',
        },
        ink: {
          DEFAULT: '#1A1A1A',
          900: '#0A0A0A',
          800: '#1A1A1A',
          700: '#2D2D2D',
          600: '#525252',
          500: '#6B7280',
          400: '#9CA3AF',
          300: '#D1D5DB',
          200: '#E5E7EB',
          100: '#F3F4F6',
          50:  '#FAFAFA',
        },
        success: '#10B981',
        warning: '#FBBF24',
        danger:  '#EF4444',
      },
      fontFamily: {
        display: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        sans:    ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft':  '0 2px 8px -2px rgba(124, 58, 237, 0.08), 0 4px 16px -4px rgba(0, 0, 0, 0.06)',
        'card':  '0 4px 16px -4px rgba(124, 58, 237, 0.10), 0 8px 32px -8px rgba(0, 0, 0, 0.08)',
        'glow':  '0 8px 32px -8px rgba(124, 58, 237, 0.40)',
      },
      borderRadius: {
        'xl': '14px',
        '2xl': '20px',
        '3xl': '28px',
      },
      animation: {
        'fade-in':       'fadeIn 0.6s ease-out forwards',
        'fade-up':       'fadeUp 0.7s ease-out forwards',
        'float':         'float 6s ease-in-out infinite',
        'pulse-slow':    'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'pochi-gradient':       'linear-gradient(135deg, #7C3AED 0%, #5B21B6 100%)',
        'pochi-gradient-soft':  'linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)',
        'pochi-gradient-dark':  'linear-gradient(135deg, #2E1065 0%, #0A0A0A 100%)',
      },
    },
  },
  plugins: [],
};
