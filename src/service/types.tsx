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
    setRecipes:  React.Dispatch<React.SetStateAction<Recipe[]>>;
}

interface Children  { 
    children: React.ReactNode
}

type itemRecipe = {
    item: Recipe;
}
export type {Recipe, RecipeContext, Children,itemRecipe};