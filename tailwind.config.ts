import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    DEFAULT: "#FFFFFF", // main background
                    subtle: "#F9FAFA",  // section background
                    card: "#F1F3F5",    // cards / containers
                },
                text: {
                    heading: "#111111",   // headings
                    body: "#333333",      // body
                    secondary: "#6E6E73", // secondary
                },
                border: {
                    light: "#E6E8EB", // dividers
                    input: "#CED4DA", // input borders
                },
                accent: {
                    DEFAULT: "#0D0D0D", // buttons / CTAs
                    hover: "#1C1C1E",   // hover/active
                    contrast: "#FFFFFF",// button text
                },
                highlight: {
                    navy: "#1D4E89",   // deep navy
                    soft: "#A7C7E7",   // subtle hover/secondary
                },
                feedback: {
                    success: "#2F9E44",
                    warning: "#E67700",
                    error: "#D32F2F",
                },
            },
        },
    },
    plugins: [],
}

export default config
