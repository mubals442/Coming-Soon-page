/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js'
  ],theme: {
    extend: {
      // backgroundImage: {
      //   'my-image': `url(${back})`,
      // },
      colors: {
        'backg-color': "#503C3C",
        'brown': "#9d6b31",
        'pantone':"#294E4A"

      },
      translate: {
        '-0.25em': '-0.25em',
      },
      fontFamily:{
        body:['Amiri']
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
  ],
}

