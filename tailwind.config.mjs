/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        menuItem: "#b3b3b3",
        aside: "#121212",
        baseColor: "#fff",
        tag: "hsla(0,0%,100%,.07);",
        highlighting: "#1a1a1a",
        tagHighlighting: "hsla(0,0%,100%,.1)",
        secondaryLight: "hsla(0,0%,100%,.7)",
      },
    },
  },
  plugins: [],
};
