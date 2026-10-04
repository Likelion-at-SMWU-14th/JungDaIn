import axios from "axios";
import type { Cafe, CreateCafeRequest, UpdateCafeRequest } from "../types/cafe";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

async function getResource<T>(path: string): Promise<T> {
  const response = await api.get<T>(path);
  return response.data;
}

export function getCafes(): Promise<Cafe[]> {
  return getResource<Cafe[]>("/cafes");
}

export async function createCafe(body: CreateCafeRequest): Promise<Cafe> {
  const response = await api.post<Cafe>("/cafes", body);
  return response.data;
}

export async function updateCafe(
  id: Cafe["id"],
  body: UpdateCafeRequest,
): Promise<Cafe> {
  const response = await api.patch<Cafe>(`/cafes/${id}`, body);
  return response.data;
}

export async function deleteCafe(id: Cafe["id"]): Promise<void> {
  await api.delete(`/cafes/${id}`);
}

export function getErrorMessage(error: unknown): string {
  if (axios.isAxiosError(error)) {
    if (!error.response) {
      return "서버에 연결할 수 없어요. 잠시 후 다시 시도해주세요";
    }
    return `요청에 실패했어요. (${error.response.status})`;
  }

  if (error instanceof Error) return error.message;
  return "알 수 없는 오류가 발생했어요.";
}