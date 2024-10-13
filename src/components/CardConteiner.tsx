import CardRecipe from './CardRecipe'
import { useRecipeContext } from '../service/providers/RecipeContextProvider'
import CreateNewRecipeCard from './CreateNewRecipeCard'
import { useEffect, useState } from 'react'


const CardConteiner = () => {
    const {recipes} = useRecipeContext()
    
  return (
    <div className='flex flex-wrap items-center justify-center'>
      {recipes && recipes.map((value,index)=>{
       return (
        <CardRecipe key={index} item={value}/>
       )
      })}
      <CreateNewRecipeCard/>
    </div>
  )
}

export default CardConteiner
