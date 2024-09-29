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
    
    setRecipes: (recipes: Recipe[]) => void;
    addRecipe: (recipe: Recipe) => void;
    removeRecipe: (recipe: Recipe) => void;
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    setModal: (context: Recipe | undefined) => void;
    clearModal: () => void;
    addIngredient: (recipe: Recipe) => void;
    addStep: (recipe: Recipe) => void;
    removeIngredient: (recipe: Recipe) => void;
    removeStep: (recipe: Recipe) => void;
    
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
    ADD_RECIPE = 'ADD_RECIPE',
    REMOVE_RECIPE = 'REMOVE_RECIPE',
    SET_MODAL = 'SET_MODAL',
    CLEAR_MODAL = 'CLEAR_MODAL',
    ADD_INGREDIENT = 'ADD_INGREDIENT',
    ADD_STEP = 'ADD_STEP',
    REMOVE_INGREDIENT = 'REMOVE_INGREDIENT',
    REMOVE_STEP = 'REMOVE_STEP',
    
}

export type {Recipe, RecipeContext, Children,itemRecipe,ReducerAction,Initstate};
export {Reducer_Action_Type}