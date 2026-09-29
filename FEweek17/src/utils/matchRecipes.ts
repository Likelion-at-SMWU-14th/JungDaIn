import type { Recipe } from "../types/recipe";

export function parseIngredients(input: string): string[] {
  return input
    .split(",")
    .map((ingredient) => ingredient.trim())
    .filter(Boolean);
}

function normalize(ingredient: string): string {
  return ingredient.toLowerCase().replaceAll(" ", "");
}

export function findMissingIngredients(
  recipe: Pick<Recipe, "ingredients">,
  pantryIngredients: string[],
): string[] {
  const pantry = new Set(pantryIngredients.map(normalize));
  return parseIngredients(recipe.ingredients).filter(
    (ingredient) => !pantry.has(normalize(ingredient)),
  );
}