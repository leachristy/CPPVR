// tailwind.config.js
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily: {
          rubikFade: ['"Rubik 80s Fade"', 'sans-serif'],
          workSans: ['"Work Sans"', 'sans-serif'],
        },
      },
    },
    plugins: [],
    corePlugins: {
      preflight: false, // optional
    },
    important: true, // adds !important to all Tailwind utilities
  };
  