import type { Config } from "tailwindcss";
import baseConfig from "@acme/tailwind";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  presets: [baseConfig],
};

export default config;
