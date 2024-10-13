

import data from '../data/data.json'
import { createContext,useState,useContext, useReducer} from 'react';
import { Children, RecipeContext, Initstate, ReducerAction,Reducer_Action_Type,Recipe} from '../types';


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
        setRecipe: setRecipe,
        addRecipe: addRecipe,
        removeRecipe: removeRecipe,
        setFavorite: setFavorite,
        isModalOpen: isModalOpen,
        setIsModalOpen: SetIsModalOpen,
        setModal: setModal,
        clearModal: clearModal,
        saveData: () => saveData()
    }


    function saveData(){
        localStorage.setItem('recipes', JSON.stringify(state.recipes))
        
    }
    saveData()

    
    function setRecipe(recipe: Recipe){
        dispatch({type: Reducer_Action_Type.SET_RECIPE,payload: recipe})
        saveData()
    }
    function addRecipe(recipe: Recipe){
        dispatch({type: Reducer_Action_Type.ADD_RECIPE, payload: recipe})
        saveData()
    }
    function removeRecipe(recipe:Recipe){
        dispatch({type: Reducer_Action_Type.REMOVE_RECIPE, payload: recipe})
        saveData()
    }
    function setFavorite(recipe:Recipe){
        dispatch({type: Reducer_Action_Type.SET_FAVORITE, payload: recipe})
        saveData()
    }
    function SetIsModalOpen(bool:boolean){
        setIsModalOpen(bool)
    }
    function setModal(context: Recipe | undefined){
        dispatch({type: Reducer_Action_Type.SET_MODAL,payload: context})
    }
    function clearModal(){
        dispatch({type: Reducer_Action_Type.CLEAR_MODAL})        
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
        case Reducer_Action_Type.SET_RECIPE:
            
        return{
            ...state,
            recipes: state.recipes.map(recipe => {
                if(recipe.id === payload.id){
                    return payload
                }else{
                    return recipe
                }
            })
        }
        case Reducer_Action_Type.ADD_RECIPE:
        return{
            ...state,
            recipes: [
                ...state.recipes,
                payload
            ]
        }
        case Reducer_Action_Type.REMOVE_RECIPE:
        return{
            ...state,
            recipes: state.recipes.filter(recipe =>{
                if(recipe.id !== payload.id){
                    return true
                }
            })
        }
        case Reducer_Action_Type.SET_FAVORITE:
        return{
            ...state,
            recipes: state.recipes.map(recipe => {
                if(recipe.id === payload.id){
                    return {...recipe, isFavorite: payload.isFavorite}
                }
                else{
                    return recipe
                }
            })
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
