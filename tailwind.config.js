/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        fontFamily: {
            reemkufi: ['Reem Kufi', 'sans-serif'],
            ubuntu: ['Ubuntu', 'sans-serif'],
        }
    },
    prefix: 'tw-',
    plugins: [],
}
