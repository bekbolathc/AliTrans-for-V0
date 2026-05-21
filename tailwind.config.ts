import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#08152F",
          800: "#0B1B3A",
          700: "#102347",
          600: "#1A2E5C",
          500: "#2A3F70",
        },
        gold: {
          DEFAULT: "#D9A441",
          soft: "#E8B965",
          deep: "#B9842B",
        },
        ink: { DEFAULT: "#1A1F2E", 2: "#4A5063" },
        mute: "#7B8299",
        paper: { DEFAULT: "#F5F2EB", 2: "#EFEAE0" },
        line: { DEFAULT: "#E2DCCE", 2: "#D4CDBC" },
        emerald: { DEFAULT: "#0E8B6C" },
        rose: { DEFAULT: "#B23A48" },
      },
      fontFamily: {
        sans: ["var(--ff)", "system-ui", "sans-serif"],
        mono: ["var(--ff-mono)", "ui-monospace", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
