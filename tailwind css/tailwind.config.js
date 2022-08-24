/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        'sxl': '50px',
    },
    colors:{
      'pup': 'rgba(195, 0, 255, 0.808)',
    }
  },
  plugins: [],
}
}