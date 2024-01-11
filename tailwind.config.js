/** @type {import('tailwindcss').Config} */
export default {
  content: ['*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        bigshoulder: ['Big Shoulders Display'],
        amatic: ['Amatic SC'],
        playfair: ['Playfair Display'],
        poppins: ['Poppins'],
        sairaextra: ['Saira Extra Condensed'],
        oswald: ['Oswald'],
        montserrat: ['Montserrat'],
        raleway: ['Raleway'],
        inter: ['Inter'],
        intertight: ['Inter Tight']
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
  plugins: [require('@tailwindcss/aspect-ratio')],
}