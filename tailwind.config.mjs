/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        menuItemColor: "#b3b3b3",
        aside: "#121212",
      },
    },
  },
  plugins: [],
};
