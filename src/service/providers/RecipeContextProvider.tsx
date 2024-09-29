

import data from '../data/data.json'
import { createContext,useState,useContext, useReducer,Reducer} from 'react';
import { Recipe, Children, RecipeContext, Initstate, ReducerAction,Reducer_Action_Type} from '../types';


const initState = {
    recipes: localStorage.getItem('recipes') ? JSON.parse(localStorage.getItem("recipes") || "{}") : data.recipes,
    modal: undefined
}
const RecipeData = createContext<undefined | RecipeContext>(undefined)


const RecipeContextProvider = ({children} : Children) => {
    const [state, dispatch] = useReducer(recipeReducer, initState)
    const [isModalOpen, setIsModalOpen] = useState(false); 
    
    const context : RecipeContext = {
        recipes: state.recipes,
        modal: state.modal,
        setRecipes: (recipes) => dispatch({type: Reducer_Action_Type.SET_RECIPE,payload: recipes}),
        addRecipe: (recipe ) => dispatch({type: Reducer_Action_Type.ADD_RECIPE,payload: recipe}),
        removeRecipe: (recipe) => dispatch({type: Reducer_Action_Type.REMOVE_RECIPE,payload: recipe}),
        isModalOpen: isModalOpen,
        setIsModalOpen: setIsModalOpen,
        setModal: (context) => dispatch({type: Reducer_Action_Type.SET_MODAL,payload: context}),
        clearModal: () => dispatch({type: Reducer_Action_Type.CLEAR_MODAL}),
        addIngredient: (recipe) => dispatch({type:Reducer_Action_Type.ADD_INGREDIENT,payload: recipe}),
        addStep: (recipe) => dispatch({type: Reducer_Action_Type.ADD_STEP,payload: recipe}),
        removeIngredient: (recipe) => dispatch({type:Reducer_Action_Type.REMOVE_INGREDIENT,payload: recipe}),
        removeStep: (recipe) => dispatch({type:Reducer_Action_Type.REMOVE_STEP,payload: recipe}),

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
                recipes: payload
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
        case Reducer_Action_Type.ADD_INGREDIENT:
            return{
                ...state,

            }
        case Reducer_Action_Type.REMOVE_INGREDIENT:

            return{
                ...state,

            }
        case Reducer_Action_Type.ADD_STEP:
            return{
                ...state,

            }
        case Reducer_Action_Type.REMOVE_STEP:
            return{
                ...state,

            }
        case Reducer_Action_Type.SET_RECIPE:
        return{
            ...state,

        }
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
