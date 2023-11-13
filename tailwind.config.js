/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0f141a",
        "grey-brown": "#141619",
        "dark-purple": "#280D3D",
        "dark-green": "#013220",
        "dark-blue": "#00008B"
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 50s linear infinite',
        'reverse-infinite-scroll': 'reverse-infinite-scroll 40s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-40%)' },
        },
        'reverse-infinite-scroll': {
          from: { transform: 'translateX(-40%)' },
          to: { transform: 'translateX(0)' },
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        }
      },
    },
  },
  plugins: []
}
