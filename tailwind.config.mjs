/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        text: "var(--text)",
        muted: "var(--muted)",
        card: "var(--card)",
        stroke: "var(--stroke)",
        accent: "var(--accent)",
        blue: "var(--blue)",
        red: "var(--red)"
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "Inter",
          "Arial"
        ]
      }
    }
  },
  plugins: []
};
