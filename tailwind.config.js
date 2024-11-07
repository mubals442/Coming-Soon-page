/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],theme: {
    extend: {
      colors: {
        'backg-color': "#503C3C",
        'brown': "#9d6b31",
        'pantone':"#294E4A"
      },
      translate: {
        '-0.25em': '-0.25em',
      },
      fontFamily:{
        Regular:['TheYearofTheCamel-Regular'],
        ExtraBold:['TheYearofTheCamel-ExtraBold'],
        Bolds:['TheYearofTheCamel-Bold']
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
  ],
}