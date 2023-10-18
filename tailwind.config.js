/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      logo_blue: '#4F8ABE', /** blue */
      white_txt: "#ffffff", /** white */
      black: '#000000',
      ghostwhite: 'ghostwhite',
      secondary: '#FFFFC4', /** yellow */
      accent: '#b8c7db', /** bluish */
      // txt: '#CDF5F5', /** cyan */
      // black: "#000000"
    }
  },
  plugins: [],
}
