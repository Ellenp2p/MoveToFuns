/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx,astro}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      typography: () => ({}),
      colors: {
        "jet-black": "#181818",
        "pale-silver": "#f2f3f5",
      },
    },
  },
  prefix: "",
  plugins: [typography()],
};
