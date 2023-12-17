/** @type {import('tailwindcss').Config} */
export default {
  content: ['*.{html,js}'],
  theme: {
    container: {
      padding: {
        default: '15px',
      }
    },
    extend: {
      fontFamily: {
        bigshoulder: ['Big Shoulders Display'],
        amatic: ['Amatic SC'],
        playfair: ['Playfair Display'],
        poppins: ['Poppins']
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [],
}