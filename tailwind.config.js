/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
      colors: {},
      animation: {
        slowSlide: 'slowSlide 60s linear infinite',
      },
      keyframes: {
        slowSlide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      backgroundImage: {
        'parallax': 'url("./src/assets/bg2.8bfe776b.jpg")'
      }
    }
  },
  plugins: [require("tailwindcss-animate"),],
}

