/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
        'parallax': 'url("./src/assets/bg2.8bfe776b.jpg")',
        'parallax2': 'url("./src/assets/bg4.8174d87b.jpg")'
      }
    }
  },
  plugins: [require("tailwindcss-animate"),],
}

