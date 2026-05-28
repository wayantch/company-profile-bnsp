import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            spacing: {
                54: "21rem",
            },
            colors: {
                primary: "rgb(var(--color-primary-rgb) / <alpha-value>)",
                "primary-600":
                    "rgb(var(--color-primary-600-rgb) / <alpha-value>)",
                "primary-700":
                    "rgb(var(--color-primary-700-rgb) / <alpha-value>)",
                secondary: "rgb(var(--color-secondary-rgb) / <alpha-value>)",
                accent: "rgb(var(--color-accent-rgb) / <alpha-value>)",
                "accent-2": "rgb(var(--color-accent-2-rgb) / <alpha-value>)",
                surface: "rgb(var(--color-surface-rgb) / <alpha-value>)",
                base: "rgb(var(--color-base-rgb) / <alpha-value>)",
                border: "rgb(var(--color-border-rgb) / <alpha-value>)",
                muted: "rgb(var(--color-muted-rgb) / <alpha-value>)",
                text: "rgb(var(--color-text-rgb) / <alpha-value>)",
                ink: "rgb(var(--color-ink-rgb) / <alpha-value>)",
            },
            fontFamily: {
                sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
                mono: ['"Space Mono"', "monospace"],
            },
        },
    },

    plugins: [forms],
};
