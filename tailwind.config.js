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
        "bg1" : "url(/images/bg1.png)",
        "bg2" : "url(/images/bg2.png)",
        "bg3" : "url(/images/bg3.png)",
        "bg4" : "url(/images/bg4.png)",
        "bg5" : "url(/images/bg5.png)",
        "bg6" : "url(/images/bg6.png)",
        "bg7" : "url(/images/bg7.png)",
        "bg8" : "url(/images/bg8.png)",
        "bg9" : "url(/images/bg9.png)",
        "bg10" : "url(/images/bg10.png)",
      },
    },
    plugins: [],
  },
};
