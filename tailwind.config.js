/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': `url('./assets/Banner.png')`,
        'sec4': `url('./assets/sec4.png')`,
        'sec41': `url('./assets/sec4-1.png')`,
        'sec42': `url('./assets/sec4-2.png')`,
        'sec43': `url('./assets/sec4-3.png')`,
        'sec44': `url('./assets/sec4-4.png')`,
        'sec45': `url('./assets/sec4-5.png')`,
        'sec5': `url('./assets/sec5.png')`,
        'footer': `url('./assets/footer.png')`,
        'sun': `url('./assets/sun.png')`,
      }
    },
  },
  plugins: [],
}

