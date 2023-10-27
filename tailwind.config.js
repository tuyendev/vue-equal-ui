/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/equal-vue/dist/theme/*.{js,ts,json}'
  ],
  theme: {
    fontFamily: {
      sans: ['inter', 'system-ui']
    },
    extend: {}
  },
  plugins: [],
  darkMode: 'class'
}
