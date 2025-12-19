/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,html}"],
  theme: {
    extend: {
      colors: {
        /* BRAND (Mindset / Coaching tone) */
        brand: {
          50:  '#f5f7ff', // page highlights / soft glow
          100: '#e9edff', // subtle fills
          200: '#c7d2fe', // borders / badges
          500: '#6366f1', // PRIMARY (buttons, links, active nav)
          600: '#4f46e5', // hover states
          700: '#4338ca', // emphasis (rare use)
        },

        /* APP BACKGROUNDS */
        app: {
          DEFAULT: '#f3f4f6', // overall app background
          soft: '#f9fafb',    // sections
        },

        /* SURFACES */
        surface: {
          DEFAULT: '#ffffff', // cards, tables, modals
          muted: '#f8fafc',   // subtle containers
        },

        /* TEXT SYSTEM */
        text: {
          primary: '#111827',   // headings
          secondary: '#6b7280', // body text
          muted: '#9ca3af',     // placeholders, hints
        },

        /* STATUS COLORS (for later use) */
        success: '#16a34a',
        warning: '#f59e0b',
        danger: '#dc2626',
      },

      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      borderRadius: {
        lg: '0.75rem',
        xl: '1rem',
      },

      boxShadow: {
        soft: '0 4px 12px rgba(0,0,0,0.04)',
        card: '0 8px 24px rgba(0,0,0,0.06)',
      },
    },
  },
  plugins: [],
}