module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'comic-neue': ['"Comic Neue"', 'cursive'],
        'baloo': ['"Baloo 2"', 'cursive'],
        'fredoka': ['"Fredoka One"', 'cursive'],
        archivo: ['Archivo Black', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light'], // This enforces the light theme
  },
};
