import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'red-50': '#f9e7ea',
        'red-100': '#ebb3bf',
        'red-200': '#e28ea0',
        'red-300': '#d45b74',
        'red-400': '#cc3b59',
        'red-500': '#bf0a30',
        'red-600': '#ae092c',
        'red-700': '#880722',
        'red-800': '#69061a',
        'red-900': '#500414',
        'blue-50': '#e8eaec',
        'blue-100': '#b6bdc4',
        'blue-200': '#939da7',
        'blue-300': '#62707f',
        'blue-400': '#435466',
        'blue-500': '#142940',
        'blue-600': '#12253a',
        'blue-700': '#0e1d2d',
        'blue-800': '#0b1723',
        'blue-900': '#08111b',
        'neutral-1': '#ffffff',
        'neutral-2': '#fdfdfd',
        'neutral-3': '#f5f5f5',
        'neutral-4': '#f1f1f1',
        'neutral-5': '#dbdbdb',
        'neutral-6': '#c3c3c3',
        'neutral-7': '#939393',
        'neutral-8': '#646464',
        'neutral-9': '#515151',
        'neutral-10': '#343434',
        'neutral-11': '#2d2d2d',
        'neutral-12': '#232323',
        'neutral-13': '#101010',
      },

    },
  },
  plugins: [],
}
export default config
