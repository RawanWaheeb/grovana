/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#2E5B41",
        light: "#D9D9D9",
      },

      keyframes: {
        moveingBorder: {
          "0%, 100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "50%": {
            borderRadius: "30% 60% 70% 40% / 50% 60% 30% 60%",
          },
        },
      },

      fontFamily: {
        "fira-sans-condensed": ['"Fira Sans Condensed"', "sans-serif"],
      },
    },
    animation: {
      moveingBorder: "moveingBorder 8s ease-in-out infinite",
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  plugins: [],
};
