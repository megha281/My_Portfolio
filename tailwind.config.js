/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: '#07070C',
        ink: '#0C0C16',
        panel: '#12121F',
        line: '#22222E',
        indigo: {
          DEFAULT: '#4F46E5',
          soft: '#6366F1',
        },
        violet: {
          DEFAULT: '#8B5CF6',
          soft: '#A78BFA',
        },
        azure: '#3AA6FF',
        paper: '#E9E9F3',
        mute: '#8B8BA3',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'aurora': 'radial-gradient(60% 50% at 20% 20%, rgba(79,70,229,0.35), transparent 60%), radial-gradient(50% 40% at 85% 15%, rgba(58,166,255,0.25), transparent 60%), radial-gradient(60% 50% at 50% 100%, rgba(139,92,246,0.25), transparent 60%)',
      },
      keyframes: {
        drift: {
          '0%, 100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(20px,-30px)' },
        },
        blink: {
          '0%, 49%': { opacity: 1 },
          '50%, 100%': { opacity: 0 },
        },
      },
      animation: {
        drift: 'drift 12s ease-in-out infinite',
        blink: 'blink 1s step-end infinite',
      },
    },
  },
  plugins: [],
}
