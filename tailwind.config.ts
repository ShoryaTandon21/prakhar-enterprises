import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        energy: {
          blue: "#0B57D0",
          yellow: "#FFD000",
          ink: "#0B1220"
        }
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(11,87,208,.20), 0 12px 30px rgba(11,87,208,.18)",
        card: "0 1px 0 rgba(11,18,32,.06), 0 12px 30px rgba(11,18,32,.10)"
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
        },
        shine: {
          "0%": { transform: "translateX(-120%)" },
          "100%": { transform: "translateX(220%)" }
        }
      },
      animation: {
        "fade-up": "fade-up 700ms ease-out both",
        float: "float 5s ease-in-out infinite",
        shine: "shine 1400ms ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;

