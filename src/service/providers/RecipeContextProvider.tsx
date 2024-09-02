

import data from '../data/data.json'
import { createContext,useState,useContext, useReducer} from 'react';
import { Recipe, Children, RecipeContext, Initstate, ReducerAction,Reducer_Action_Type} from '../types';
const RecipeData = createContext<undefined | RecipeContext>(undefined)

const initState = {
    recipes: data.recipes,
    modal: undefined
}



const RecipeContextProvider = ({children} : Children) => {
    const [state, dispatch] = useReducer(recipeReducer, initState)
    const [isModalOpen, setIsModalOpen] = useState(false); 
    
    const context = {
        recipes: state.recipes,
        modal: state.modal,
        addRecipe: (recipe: Recipe) => dispatch({type: Reducer_Action_Type.ADD_RECIPE}),
        removeRecipe: (recipe: Recipe) => dispatch({type: Reducer_Action_Type.REMOVE_RECIPE}),
        isModalOpen: isModalOpen,
        setIsModalOpen: setIsModalOpen,
        setModal: (context: Recipe) => dispatch({type: Reducer_Action_Type.SET_MODAL,payload: context}),
        clearModal: () => dispatch({type: Reducer_Action_Type.CLEAR_MODAL})
    }
    
    return (
        <RecipeData.Provider value={context}>
            {children}
        </RecipeData.Provider>
    );
}
function recipeReducer(state: Initstate, action: ReducerAction){
    const { type, payload} = action;
    switch (type) {
        case Reducer_Action_Type.ADD_RECIPE:
            return {
                ...state,
                
            };
        case Reducer_Action_Type.REMOVE_RECIPE:
            return {
                ...state,
                
            };
        case Reducer_Action_Type.CLEAR_MODAL:
            return {
                ...state,
                modal: undefined
            };
        case Reducer_Action_Type.SET_MODAL:
            return {
                ...state,
                modal: payload
            };
        
    }
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
