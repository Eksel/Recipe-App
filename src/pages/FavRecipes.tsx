
import { FaRegStar } from "react-icons/fa";
import { useRecipeContext } from "../service/providers/RecipeContextProvider";
import { useEffect, useState } from "react";
import CardConteiner from "../components/CardConteiner";
import Modal from "../components/modal/Modal";



export default function FavRecipes() {
  const {isModalOpen} = useRecipeContext()
  const {recipes} = useRecipeContext()
  const [localRecipes, setLocalRecipes] = useState(recipes);

  useEffect(() => {
    setLocalRecipes(recipes)
  }, [localRecipes]);

  return (
  <div>
    <div className="flex justify-center items-center bg-gray-900 text-white font-bold md:text-5xl text-2xl text-center p-8">
      <FaRegStar />
      <div className="px-6">
        Recipes you like:
      </div>
      
      <FaRegStar />
    </div>
    <div className="content flex justify-center flex-wrap">
      <CardConteiner localRecipes={localRecipes.filter(
        (recipe) => recipe.isFavorite === true
      )}/>
      {isModalOpen && <Modal localRecipes={localRecipes} setLocalRecipes={setLocalRecipes}/>}
    </div>
    
  </div>
    
  )
}
