/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "top-to-bottom": {
          "0%": {
            opacity: 0,
            transform: "translateY(-100%)"
          },
          "100%": {
            opacity: 1,
            transform: "translateY(0)"
          }
        },
        "left-to-right": {
          "0%": {
            opacity: 0,
            transform: "translateX(-100%)"
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)"
          }
        },
        "right-to-left": {
          "0%": {
            opacity: 0,
            transform: "translateX(100%)"
          },
          "100%": {
            opacity: 1,
            transform: "translateX(0)"
          },
          'zoom': {
            "0%": {
              opacity: 0,
              transform: "scale-150"
            },
            "100%": {
              opacity: 1,
              transform: "scale-100"
            }
          }
        }
      },
      animation: {
        "top-to-bottom":
          "top-to-bottom 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards",
        "left-to-right":
          "left-to-right 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards",
        "right-to-left":
          "right-to-left 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards",
        "zoom":
          "zoom 1.5s cubic-bezier(0.075, 0.82, 0.165, 1) forwards"
      }
    }
  },
  plugins: []
};
