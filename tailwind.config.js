import { transform } from 'typescript'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateRows:{
        'page': '8vh 1fr 4vh',
      },
      backgroundImage: {
        'front-image': "url('/img/spagetti.webp')",
      }
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    function ({addUtilities}){
      const newUtilities = {
        ".scrollbar-thin" : {
          scrollbarWidth: "thin",
          scrollbarColor: "gray yellow",
          
        },
        ".scrollbar-webkit":{
          "&::-webkit-scrollbar" : {
            
            width: "10px",
            borderRadius: "50px",
            

          },
          "&::-webkit-scrollbar-track" : {
            background: "#E5E5E5",
            borderRadius: "50px"
          },
          "&::-webkit-scrollbar-thumb" : {
            background: "#898989",
            borderRadius: "20px",
            
          }
        }
      }
      addUtilities(newUtilities, ["responsive","hover"])
    }
  ],
}

