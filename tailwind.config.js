/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        reveal: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        hide: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        intro: {
          '0%': { opacity: '0', transform:'translateY(-15px)'},
          '50%': { opacity: '0' },
          '100%': { opacity: '1', transform:'translateY(0px)' }
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0', display: 'none' }
        }
      },
      animation: {
        reveal: 'reveal 1s ease-in-out forwards',
        hide: 'hide 1s ease-in-out forwards',
        intro: 'intro 1.5s ease-in-out forwards',
        introDelay: 'intro 1.5s ease-in-out 0.3s forwards',
        fadeOut: 'fadeOut 1s ease-in-out 2.2s forwards'
      },
      fontFamily: {
        neue: ['Neue Montreal', 'sans-serif'],
        neueThin: ['Neue Montreal Thin', 'sans-serif'],
        neueBold: ['Neue Montreal Bold', 'sans-serif'],
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
