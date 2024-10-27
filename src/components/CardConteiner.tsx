import CardRecipe from './CardRecipe'
import CreateNewRecipeCard from './CreateNewRecipeCard'
import { Recipe } from '../service/types'



interface Props {
  localRecipes: Recipe[];
  
}

const CardConteiner = (props:Props) => {
  const {localRecipes} = props
  
  return (
    <div className='flex flex-wrap items-center justify-center'>
      {localRecipes && localRecipes.map((value,index)=>{
       return (
        <CardRecipe key={index} item={value} />
       )
      })}
      <CreateNewRecipeCard/>
    </div>
  )
}

export default CardConteiner
