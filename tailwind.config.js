import primeui from 'tailwindcss-primeui';

export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {},
  },
  plugins: [require('tailwindcss-primeui'), primeui],
};
