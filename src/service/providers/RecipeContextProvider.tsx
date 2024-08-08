

import data from '../data/data.json'
import { createContext,useState,useContext} from 'react';
import { Recipe, Children, RecipeContext } from '../types';
const RecipeData = createContext<undefined | RecipeContext>(undefined)



const RecipeContextProvider = ({children} : Children) => {
    const [recipes, setRecipes] = useState<Recipe[]>(data.recipes);
    
    return (
        <RecipeData.Provider value={{recipes,setRecipes}}>
            {children}
        </RecipeData.Provider>
    );
}

export function useRecipeContext () {
    const context = useContext(RecipeData); 
    if(!context) {
        throw new Error(
            "useRecipeContext must be using within a RecipeContextProvider"
        )
    }
    return context
}

export default RecipeContextProvider;
