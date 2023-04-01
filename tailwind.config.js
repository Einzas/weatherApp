/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "sans-serif"],
      },
     gridTemplateColumns: {
        "two": "auto auto"
      },
      backgroundImage: {
        "bg1" : "url(/public/images/bg1.png)",
        "bg2" : "url(/public/images/bg2.png)",
        "bg3" : "url(/public/images/bg3.png)",
        "bg4" : "url(/public/images/bg4.png)",
        "bg5" : "url(/public/images/bg5.png)",
        "bg6" : "url(/public/images/bg6.png)",
        "bg7" : "url(/public/images/bg7.png)",
        "bg8" : "url(/public/images/bg8.png)",
        "bg9" : "url(/public/images/bg9.png)",
        "bg10" : "url(/public/images/bg10.png)",
      },
    },
    plugins: [],
  },
};
