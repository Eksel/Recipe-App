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
        'front-image': "url('https://plus.unsplash.com/premium_photo-1664472619078-9db415ebef44?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BhZ2hldHRpfGVufDB8fDB8fHww')",
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

