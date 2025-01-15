/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        "montserrat": ['Montserrat', 'serif']
      }
    },
    colors: {
      navy: '#0461a6',
      green: '#0089c1',
    },
    fontSize: {
      header: '2rem'
    }
  },
  plugins: []
}
