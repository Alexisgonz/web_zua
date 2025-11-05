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
          DEFAULT: "#f8a5c2",
          light: "#fbb6d3", 
          dark: "#e794b3"
        },
        'pink-bg': {
          DEFAULT: "#f7c7db",
          light: "#fad4e6",
          dark: "#f0b8d0"
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
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      }
    },
  },
  plugins: [],
};
