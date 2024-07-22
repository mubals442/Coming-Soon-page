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
        'brown': "#74512D"

      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('daisyui'),
  ],
}

