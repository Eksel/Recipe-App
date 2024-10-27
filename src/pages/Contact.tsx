import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
export default function Contact() {
  return (
    <div className="flex flex-col  justify-center items-center bg-slate-100">
      <h1 className="text-7xl tracking-widest font-bold p-2 m-2 font-customFont">Click to contact me!</h1>
      <div className="flex justify-center items-center text-5xl">
      <FaArrowRight/> 
      <a  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
        <div className=" py-2 px-4 m-2 bg-slate-300 text-lg hover:bg-slate-400 hover:cursor-pointer rounded-xl shadow-xl">
          
          <div>
            Contact
          </div> 
          
        </div>
      </a> 
      <FaArrowLeft />
      </div>
      
    </div>
  )
}


