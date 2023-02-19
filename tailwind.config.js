/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'my': '0 0 55px -15px rgba(0, 0, 0, 0)',
      }
    },
  },
  plugins: [],
}
