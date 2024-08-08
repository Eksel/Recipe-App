import { FaPlus } from "react-icons/fa6";

function CreateNewRecipeCard() {
  
  return (
    <div  className=" mx-6 my-10 w-72 aspect-square bg-slate-500 hover:bg-slate-600 hover:cursor-pointer  text-white  text-xl m-6 text-center rounded-lg flex flex-col justify-center items-center">
        <div className="font-bold">Create New Recipe</div> <FaPlus className="text-3xl "/>
    </div>
  )
}


export default CreateNewRecipeCard
