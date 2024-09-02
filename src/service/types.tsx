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


interface RecipeContext {
    recipes: Recipe[];
    modal: undefined | Recipe;
    addRecipe: (recipe: Recipe) => void;
    removeRecipe: (recipe: Recipe) => void;
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setModal: (context: Recipe) => void;
    clearModal: () => void;
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
    ADD_RECIPE = 'ADD_RECIPE',
    REMOVE_RECIPE = 'REMOVE_RECIPE',
    SET_MODAL = 'SET_MODAL',
    CLEAR_MODAL = 'CLEAR_MODAL',
}

export type {Recipe, RecipeContext, Children,itemRecipe,ReducerAction,Initstate};
export {Reducer_Action_Type}