import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'hero-pattern': "url('/image/marvel_bg.jpg')",
      },
      colors: {
        'marvel-red': '#ec1d24',
      },
      
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      orbitron: ['Orbitron', 'sans-serif'],
            }
  },
  plugins: [],
}
export default config
