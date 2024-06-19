/** @type {import('tailwindcss').Config} */
import { nextui } from '@nextui-org/react';
//const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui(),
    require("daisyui"),
  ]
}

// export default {
//   content: [
    
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

