export interface Recipe {
    id: string;
    title: string;
    ingredients: string;
    instructions: string;
}

export type CreateRecipeRequest = Omit<Recipe, "id">;
