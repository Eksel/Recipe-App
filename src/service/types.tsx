interface Recipe {
    id: number;
    title: string; 
    ingredients: string[]; 
    instructions: string; 
    img: string; 
    energyValue: string; 
    steps: string[]; 
    isFavorite: boolean;
}
interface initialData{
    recipes: Recipe[];
    modal: undefined | Recipe;
}

interface RecipeContext {
    recipes: Recipe[];
    modal: undefined | Recipe;
    
    setRecipe: (recipe: Recipe) => void;
    addRecipe: (recipe: Recipe) => void;
    removeRecipe: (recipe: Recipe) => void;
    setFavorite: (recipe:Recipe) => void;
    
    isModalOpen: boolean;
    setIsModalOpen: (bool: boolean) => void;
    setModal: (context: Recipe | undefined) => void;
    clearModal: () => void;
    saveData: () => void;
    
}

interface Children  { 
    children: React.ReactNode
}

type itemRecipe = {
    item: Recipe;
}
type ReducerAction = {
    type: Reducer_Action_Type;
    payload?: any;
}

type Initstate = {recipes: Recipe[], modal: undefined | Recipe}
const enum Reducer_Action_Type{
    
    SET_RECIPE = 'SET_RECIPE',
    ADD_RECIPE = "ADD_RECIPE",
    REMOVE_RECIPE = "REMOVE_RECIPE",
    SET_MODAL = 'SET_MODAL',
    CLEAR_MODAL = 'CLEAR_MODAL',
    SET_FAVORITE = "SET_FAVORITE"
    
}

export type {Recipe, RecipeContext, Children,itemRecipe,ReducerAction,Initstate,initialData};
export {Reducer_Action_Type}