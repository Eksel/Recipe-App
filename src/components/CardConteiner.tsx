import CardRecipe from './CardRecipe'
import { useRecipeContext } from '../service/providers/RecipeContextProvider'
import CreateNewRecipeCard from './CreateNewRecipeCard'


const CardConteiner = () => {
    const {recipes} = useRecipeContext()
  return (
    <div className='flex flex-wrap items-center justify-center'>
      {recipes && recipes.map((value)=>{
       return (
        <CardRecipe item={value}/>
       )
      })}
      <CreateNewRecipeCard/>
    </div>
  )
}

export default CardConteiner
