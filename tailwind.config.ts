import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#0f172a", // Slate 900
                secondary: "#f59e0b", // Amber 500
                accent: "#10b981", // Emerald 500
            },
            fontFamily: {
                sans: ['var(--font-inter)', 'sans-serif'],
                arabic: ['var(--font-cairo)', 'sans-serif'],
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
