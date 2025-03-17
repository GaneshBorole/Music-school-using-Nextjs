const config = {
  plugins: ["@tailwindcss/postcss"],
  
  darkMode:'class',
  animation: {
    scroll:"scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
    spotlight: "spotlight 2s ease .75s 1 forwards",
  },
  keyframes: {
    spotlight: {
      "0%": {
        opacity: 0,
        transform: "translate(-72%, -62%) scale(0.5)",
      },
      "100%": {
        opacity: 1,
        transform: "translate(-50%,-40%) scale(1)",
      },
    },
    scroll: {
      to: {
        transform: 'translate(calc(-50% - 0.5rem))',
      },
    },
  },
};

export default config;
