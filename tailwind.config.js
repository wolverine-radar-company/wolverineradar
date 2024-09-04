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
      colors: {
        primary_white: '#3F3F46', /** gray */
        white_txt: "#ffffff", /** white */
        secondary: '#FFFFC4', /** yellow */
        accent: '#b8c7db', /** bluish */
        txt: '#CDF5F5', /** cyan */
        black: "#000000",
        white: "#ffffff",
        error_red: "#e03636",
        success: "#53a551",
        wr_yellow: "#ffffc4",
        wr_yellow_logo: "#f1f150",
        wr_blue: "#0001de",
        wr_blue_logo: "#4F72BE",
        wr_cyan: "#63d8d7",
        wr_red: "#d12d1f",
        wr_gray: "#1c1c1f",
        wr_text: "#828282"
        /*blue #0000e0 
        #313233*/
      },
      fontFamily: {
        sans: ["var(--font-opensans)"],
        caveat: ["var(--font-caveat)"],
      },
    },
  },
  plugins: [],
}
