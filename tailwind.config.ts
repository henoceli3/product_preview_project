import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark_cyan: "hsl(158, 36%, 37%)",
        cream: "hsl(30, 38%, 92%)",
        Very_dark_blue: "hsl(212, 21%, 14%)",
        Dark_grayish_blue: "hsl(228, 12%, 48%)",
        White: "hsl(0, 0%, 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
