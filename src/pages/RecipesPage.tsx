import CardConteiner from "../components/CardConteiner"
import { IoFastFoodOutline } from "react-icons/io5";

import { MdEmojiFoodBeverage } from "react-icons/md";

export default function RecipesPage() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl m- flex flex-row font-thin   text-center p-2 my-6 ">
        <IoFastFoodOutline/>
        <p>Click to see Recipe</p> 
        <MdEmojiFoodBeverage/>  
      </h1>
      <CardConteiner/>
      
    </div>
  )
}
