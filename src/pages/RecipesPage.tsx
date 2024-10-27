import CardConteiner from "../components/CardConteiner"
import { IoFastFoodOutline } from "react-icons/io5";
import Modal from "../components/modal/Modal";
import { MdEmojiFoodBeverage } from "react-icons/md";
import { useRecipeContext } from "../service/providers/RecipeContextProvider";
import { useEffect, useState } from "react";

export default function RecipesPage() {
  const {isModalOpen} = useRecipeContext()
  const {recipes} = useRecipeContext()
  const [localRecipes, setLocalRecipes] = useState(recipes);

  useEffect(() => {
    setLocalRecipes(recipes)
  }, [localRecipes]);

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-3xl md:text-5xl  flex flex-row font-normal   text-center p-2 my-6 ">
        <IoFastFoodOutline/>
        <p className="mx-3">Click to see Recipe</p> 
        <MdEmojiFoodBeverage/>  
      </h1>
      <CardConteiner localRecipes={localRecipes}/>
      {isModalOpen && <Modal localRecipes={localRecipes} setLocalRecipes={setLocalRecipes}/>}
    </div>
  )
}
