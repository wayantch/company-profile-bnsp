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
                primary: "#0EA5E9",
                accent: "#22D3EE",
                surface: "#111827",
                base: "#0A0F1E",
            },
            fontFamily: {
                sans: ['"DM Sans"', ...defaultTheme.fontFamily.sans],
                mono: ['"Space Mono"', "monospace"],
            },
        },
    },

    plugins: [forms],
};
