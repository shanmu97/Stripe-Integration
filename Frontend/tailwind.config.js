/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          teal: '#008080',
        },
        accent: {
          gold: '#FFD700',
        },
        neutral: {
          ivory: '#FFFFF0',
          'light-gray': '#F5F5F5',
        }
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'lora': ['Lora', 'serif'],
      },
      borderRadius: {
        'soft': '12px',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 128, 128, 0.1)',
      }
    },
  },
  plugins: [],
}
