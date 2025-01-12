/** @type {import('tailwindcss').Config} */
export default {
     content: [
          "./app/**/*.{js,ts,jsx,tsx}", 
          "./pages/**/*.{js,ts,jsx,tsx}", 
          "./components/**/*.{js,ts,jsx,tsx}",
          "./node_modules/@nextui-org/react/**/*.js", 
     ],
     theme: {
          extend: {},
     },
     plugins: [],
};