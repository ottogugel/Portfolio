import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        surface: "#171023",
        surfaces: "#413A4F",
        purples: "#8A42DB",
      },
      textColor: {
        primary: "#F5F6F6",
        secondary: "#CDD0D4",
        buttonprimary: "#F5F6F6",
        strokehigh: "#7DFFAF",
      },
    },
  },
  plugins: [],
};
export default config;
