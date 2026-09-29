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

export function getErrorMessage(error: unknown): string {
    if (axios.isAxiosError(error)) {
        if (!error.response) {
            return "서버에 연결할 수 없어요. JSON Server를 확인해 주세요.";
        }
        return "요청에 실패했어요. (" + error.response. status + ")";
    }

    if (error instanceof Error) return error.message;
    return "알 수 없는 오류가 발생했어요.";
}