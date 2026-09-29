import axios from "axios";
import type { CreateRecipeRequest, Recipe } from "../types/recipe";

export async function  createRecipe(body: CreateRecipeRequest): Promise<Recipe> {
    const response = await api.post<Recipe>("/recipes", body);
    return response.data;    
}

export async function  deleteRecipe(id: Recipe["id"]): Promise<void> {
    await api.delete("/recipes/" + id);    
}

const api = axios.create({
    baseURL : "http://localhost:8000",
});

async function  getResource<T>(path: string): Promise<T> {
    const response = await api.get<T>(path);
    return response.data;
}

export function getRecipes(): Promise<Recipe[]> {
    return getResource<Recipe[]>("/recipes");
}

export function getRecipe(id: Recipe["id"]): Promise<Recipe> {
    return getResource<Recipe>(`/recipes/${id}`);
}