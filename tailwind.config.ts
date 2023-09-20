import type { Config } from 'tailwindcss';

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
        'gradient-button':
          'linear-gradient(27deg, #53389E 8.33%, #6941C6 91.67%)',
      },
      colors: {
        primary: '#545F71',
        IFTextBold: '#D8D4FF',
        IFText: '#AFAAC7',
        IFTextLight: '#DDD',
        IFPurple: '#241663',
        IFPurpleLight: '#302852',
        IFPurpleDark: '#322751',
        IFGreen: '#7EE787',
        IFBlack: '#050505',
      },
    },
  },
  plugins: [],
};
export default config;
