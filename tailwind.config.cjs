/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-pattern-des': "url('./src/images/pattern-background-desktop.svg')",
        'bg-pattern-mob': "url('./src/images/pattern-background-mobile.svg')",
      }
    },
    fontFamily: {
      RHD: ["Red Hat Display"]
    }
  },
  plugins: [],
}
