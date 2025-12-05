import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1F3B73',
          light: '#2A4D8F',
          dark: '#162D5C',
        },
        secondary: {
          DEFAULT: '#3A7BD5',
          light: '#5A93E5',
          dark: '#2A5BA5',
        },
        accent: {
          DEFAULT: '#00C2A8',
          light: '#20D2B8',
          dark: '#00A890',
        },
        neutral: {
          DEFAULT: '#F7F9FC',
          50: '#FFFFFF',
          100: '#F7F9FC',
          200: '#E8EDF5',
          300: '#D1DBE8',
          400: '#B0BDD1',
        },
        dark: {
          DEFAULT: '#1C2230',
          light: '#2C3442',
        },
      },
      fontFamily: {
        sans: ['system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'soft-lg': '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
export default config;
