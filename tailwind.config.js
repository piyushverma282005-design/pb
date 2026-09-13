/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
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
          darker: '#080B0F',
          dark: '#10141B',
          card: '#181E29',
          border: '#273142',
          subtle: '#1E2633',
        },
        ivory: {
          bg: '#FAF8F5',
          card: '#FFFFFF',
          border: '#E8E2D7',
          subtle: '#F3EFE8',
          text: '#292524',
          muted: '#78716C',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Cinzel', 'serif'],
      },
      backgroundImage: {
        'metallic-gradient': 'linear-gradient(135deg, #C59B27 0%, #E2BF5C 50%, #C86A3D 100%)',
        'copper-gradient': 'linear-gradient(135deg, #C86A3D 0%, #DE8658 50%, #B08958 100%)',
        'gold-foil': 'linear-gradient(135deg, #ECC86A 0%, #C59B27 40%, #E8C768 70%, #9B7617 100%)',
      },
      boxShadow: {
        'glow-brass': '0 0 30px -5px rgba(197, 155, 39, 0.35)',
        'glow-copper': '0 0 30px -5px rgba(200, 106, 61, 0.35)',
        'card-luxury': '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
        'card-ivory': '0 20px 40px -15px rgba(180, 140, 90, 0.12)',
      }
    },
  },
  plugins: [],
}
