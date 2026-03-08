/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#004923',
          gold:  '#faa61a',
        },
      },
      fontFamily: {
        sans: ['Be Vietnam Pro', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: { xl: '1200px' },
      },
    },
  },
  plugins: [],
};
