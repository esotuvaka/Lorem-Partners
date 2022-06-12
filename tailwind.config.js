const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{html, js}"],
  theme: {
     
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Antic Didone', 'serif'],
      sans: ['BIZ UDPMincho', 'serif'],
      sans: ['Fredoka', 'sans-serif'],
      sans: ['Merriweather', 'serif'],
      sans: ['Outfit', 'sans-serif'],
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
        colors: {
          transparent: '#ffffff00',
          'cream': '#dad7d2',
          'wood-brown': '#302724',
          'coffee-brown': '#796e68',
          'white': '#fff',
          'leaf-green': '#62762e',
          'gold': '#FFD700',
          'black': '#000000',
          gray: colors.neutral, 
      },
    },
  },
  plugins: [
     
  ],
}
