/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        metallic: {
          brass: {
            DEFAULT: '#C59B27',
            light: '#E2BF5C',
            dark: '#8C6C16',
          },
          copper: {
            DEFAULT: '#C86A3D',
            light: '#DE8658',
            dark: '#8B3E19',
          },
          bronze: {
            DEFAULT: '#B08958',
            light: '#C9A779',
            dark: '#765831',
          },
          steel: {
            DEFAULT: '#94A3B8',
            light: '#E2E8F0',
            dark: '#475569',
          },
        },
        surface: {
          darker: '#0B0F14',
          dark: '#12171F',
          card: '#1A212D',
          border: '#2A3444',
          subtle: '#212A38',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Cinzel', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'metallic-gradient': 'linear-gradient(135deg, #C59B27 0%, #E2BF5C 50%, #C86A3D 100%)',
        'copper-gradient': 'linear-gradient(135deg, #C86A3D 0%, #DE8658 50%, #B08958 100%)',
        'dark-radial': 'radial-gradient(ellipse at center, #1A212D 0%, #0B0F14 100%)',
      },
      boxShadow: {
        'glow-brass': '0 0 25px -5px rgba(197, 155, 39, 0.3)',
        'glow-copper': '0 0 25px -5px rgba(200, 106, 61, 0.3)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
