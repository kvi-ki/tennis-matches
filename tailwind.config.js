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
    screens: {
      'md': '768px',
      'lg': '1024px',
    },
    colors: {
      navy: '#0461a6',
      green: '#0089c1',
      gray: '#3f4756',
      white: '#FFFFFF'
    },
    fontSize: {
      header: '2rem',
      headerLg: '3rem',
      textSm: '0.6rem',
      textMd: '1rem',
      textLg: '1.25rem',
    }
  },
  plugins: []
}
