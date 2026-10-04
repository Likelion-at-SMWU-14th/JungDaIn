export const REGIONS = ["성수", "연남", "망원", "한남", "익선동"] as const;

export type Region = (typeof REGIONS)[number];
export type RegionFilter = Region | "전체";
export type SortOrder = "recommend" | "latest";

export interface Cafe {
  id: string;
  name: string;
  region: Region;
  address: string;
  tags: string[];
  rating: number;
  description: string;
  isFavorite: boolean;
  createdAt: string;
}

export type CreateCafeRequest = Omit<Cafe, "id">;

export type UpdateCafeRequest = Partial<Omit<Cafe, "id" | "createdAt">>;

export type CafeSearchTarget = Pick<Cafe, "name" | "tags">;

export type CafeFormValues = Omit<CreateCafeRequest, "isFavorite" | "createdAt">;