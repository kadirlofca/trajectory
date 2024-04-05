/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        text: '#000000',
        background: '#0f0a0a',
        primary: '#c9b0b0',
        secondary: '#655b43',
        accent: '#a19e72',
        card: '#c9b0b0',
        button: '#BCB146',
        popover: '#655b43',
        muted: '#655b43',
        destructive: '#C72329',
        border: '#A1A1A1',
        input: '#2D2D2D',
        ring: '#655b43',
        radius: '#A1A1A1',
        border: "hsl(var(--border))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    require('postcss-nesting'), // Moved this line before Tailwind CSS
    require('tailwindcss'),
    require('autoprefixer'),
  ],
};
