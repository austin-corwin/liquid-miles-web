import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{html,js}",
    "./src/app/*.{js,ts,jsx,tsx,mdx}",
    "./src/*",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#ffc800",
        contrastPrimary: "1C606D",
        secondary: "#2C95A9",
        light: "#ffffff",
      },
      fontFamily: {
        primary: "Poppins",
      },
      fontSize: {
        hero: "4rem",
      },
      boxShadow: {
        "btn-fill": "inset 0 -4rem 0 0 #ffc800",
      },
    },
  },
  plugins: [],
} satisfies Config;
