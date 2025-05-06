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
      'xl': '1280px'
    },
    colors: {
      navy: '#0461a6',
      blue: '#0089c1',
      gray: "#7D8080",
      darkGray: '#3f4756',
      white: '#FFFFFF'
    },
    fontSize: {
      header: '2rem',
      headerLg: '3rem',
      header2: '1.3rem',
      header2Lg: '2rem',
      textSm: '0.6rem',
      textMd: '1rem',
      textLg: '1.25rem',
      textMatches: '0.8rem'
    }
  },
  plugins: []
}
