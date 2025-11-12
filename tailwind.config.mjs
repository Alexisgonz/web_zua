/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: { 
      center: true, 
      padding: "1rem",
      screens: {
        "2xl": "1400px",
      }
    },
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        nunito: ['"Nunito"', "system-ui", "sans-serif"],
      },
      colors: {
        forest: { 
          DEFAULT: "#1a4d2e", 
          light: "#2d5f3f", 
          dark: "#0f3a23" 
        },
        cacao: { 
          DEFAULT: "#c9a775", 
          light: "#d4b896", 
          dark: "#b8956a" 
        },
        'pink-soft': {
          DEFAULT: "#059669",
          light: "#10b981", 
          dark: "#047857"
        },
        'pink-bg': {
          DEFAULT: "#6ee7b7",
          light: "#a7f3d0",
          dark: "#34d399"
        },
        'title-green': {
          DEFAULT: "#1a4d2e",
          light: "#2d5f3f",
          dark: "#0f3a23"
        },
        'icon-green': {
          DEFAULT: "#166534",
          light: "#15803d",
          dark: "#14532d"
        },
        'icon-beige': {
          DEFAULT: "#D8B17C",
          light: "#E2C194",
          dark: "#C9A066"
        },
        ink: "#0C0C0C"
      },
      borderRadius: { 
        xl: "1rem", 
        "2xl": "1.25rem", 
        "3xl": "1.5rem",
        pill: "999px" 
      },
      boxShadow: {
        soft: "0 20px 60px -20px rgba(0,0,0,.18)",
        card: "0 10px 30px -10px rgba(0,0,0,.15)",
        "card-hover": "0 20px 50px -15px rgba(0,0,0,.25)",
        inset: "inset 0 1px 0 rgba(255,255,255,.12)"
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out",
        "slide-up": "slide-up 0.5s ease-out",
        "spin-slow": "spin-slow 30s linear infinite",
        "counter-spin": "counter-spin 30s linear infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "slide-up": {
          "0%": {
            transform: "translateY(20px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
        "spin-slow": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        "counter-spin": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
      },
      spacing: {
        '18': '4.5rem',
        '26': '6.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
};
