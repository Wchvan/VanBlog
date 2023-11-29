/** @type {import('tailwindcss').Config} */
export default {
    corePlugins: {
        preflight: false, // 禁用 Preflight
    },
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    plugins: [],
};
