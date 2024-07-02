/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/hero_section.webp')",
        'contact': "url('/src/assets/contact-bg.webp')",
        'about': "url('/src/assets/about-bg.jpg')",
        'featuredbg': "url('/src/assets/featuredbg.jpg')",
      },
    },
  },
  plugins: [],
}

