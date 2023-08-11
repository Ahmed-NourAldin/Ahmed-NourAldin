/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: "#DC4492",
        yellow: "#FDCC46",
        gray: "#ededed",
        "royal-blue": "#220558",
        "deep-blue": "#010026",
        "dark-gray": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)"
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow": 
            "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
        "gradient-rainblue": 
            "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"]
      },
      content: {
        person1: "url('https://github.com/ed-roh/react-portfolio/blob/master/public/assets/person-1.png?raw=true')",
        person2: "url('https://github.com/ed-roh/react-portfolio/blob/master/public/assets/person-3.png?raw=true')",
        person3: "url('https://github.com/ed-roh/react-portfolio/blob/master/public/assets/person-2.png?raw=true')",
        brush: "url('./assets/brush.png')",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1060px",
       
      }
    },
  },
  plugins: [],
}

