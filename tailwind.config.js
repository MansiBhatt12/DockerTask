/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundColor: {
                cdblacklite: "#010920",
                cdoffwhite: "#F2F2F2",
                cdmidwhite: "#f4f4f4",
                cdprimary: "#15113C",
                cdsecondary: "#4D4D4D",
                cddarkblue: "#3680C8",
                cdliteBlue: "#443acd",
                cdnavyblue: "#241f61",
                cddblight: "#333867",
                cddbmedium: "#17193B",
                cddbdark: "#191B39",
            },
            colors: {
                cdblacklite: "#010920",
                cdoffwhite: "#F2F2F2",
                cdmidwhite: "#f4f4f4",
                cdprimary: "#15113C",
                cdsecondary: "#4D4D4D",
                cddarkblue: "#3680C8",
                cdliteBlue: "#443acd",
                cdnavyblue: "#241f61",
                cddblight: "#333867",
                cddbmedium: "#17193B",
                cddbdark: "#191B39",
            },
        },
    },
    plugins: [
        require("@tailwindcss/forms"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
    ],
};
