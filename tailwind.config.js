/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a0000',
          900: '#1a0000',
          800: '#fff5f5',
          700: '#180000',
          600: '#2d0000',
          500: '#3f0000',
        },
        electric: {
          blue: '#cc0000',
          cyan: '#e53e3e',
          bright: '#fc8181',
        },
        steel: {
          DEFAULT: '#fef2f2',
          light: '#fecaca',
          silver: '#6b7280',
        },
        neon: '#ff2222',
      },
      fontFamily: {
        display: ['var(--font-orbitron)', 'monospace'],
        body: ['var(--font-inter)', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(220,38,38,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.04) 1px, transparent 1px)",
        'glow-radial': 'radial-gradient(ellipse at center, rgba(220,38,38,0.15) 0%, transparent 70%)',
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'count-up': 'countUp 2s ease-out forwards',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(204,0,0,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(229,62,62,0.6)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(204,0,0,0.5)',
        'neon-cyan': '0 0 20px rgba(229,62,62,0.5)',
        'glow-sm': '0 0 10px rgba(204,0,0,0.3)',
      },
    },
  },
  plugins: [],
}
