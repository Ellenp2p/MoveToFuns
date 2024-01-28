import typography from "@tailwindcss/typography"
/** @type {import('tailwindcss').Config} */
export default ({
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx,astro}',
    './node_modules/flowbite/**/*.js'
  ],
  prefix: "",
  plugins: [
    typography()
  ],
})
 