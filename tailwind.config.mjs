/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
     content: [
          "./app/**/*.{js,ts,jsx,tsx}",
          "./components/**/*.{js,ts,jsx,tsx}",
          "./pages/**/*.{js,ts,jsx,tsx}",
          "./public/**/*.{html}",
     ],
     theme: {
          extend: {
               container: {
                    center: true, 
                    padding: "1rem", 
               },
          },
     },
     plugins: [],
};

export default tailwindConfig;