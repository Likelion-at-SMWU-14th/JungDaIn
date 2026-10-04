import { REGIONS } from "../types/cafe";
import type {
  Cafe,
  CafeSearchTarget,
  Region,
  RegionFilter,
  SortOrder,
} from "../types/cafe";

function normalize(text: string): string {
  return text.toLowerCase().replaceAll(" ", "").replace(/^#/, "");
}

export function isRegion(value: string): value is Region {
  return REGIONS.some((region) => region === value);
}

export function parseTags(input: string): string[] {
  return input
    .split(",")
    .map((tag) => tag.trim().replace(/^#/, ""))
    .filter(Boolean);
}

export function matchesKeyword(cafe: CafeSearchTarget, keyword: string): boolean {
  const query = normalize(keyword);
  if (!query) return true;

  return (
    normalize(cafe.name).includes(query) ||
    cafe.tags.some((tag) => normalize(tag).includes(query))
  );
}

export function matchesRegion(
  cafe: Pick<Cafe, "region">,
  region: RegionFilter,
): boolean {
  return region === "전체" || cafe.region === region;
}

export function sortByDesc<T>(items: readonly T[], getValue: (item: T) => number): T[] {
  return [...items].sort((a, b) => getValue(b) - getValue(a));
}

export function sortCafes(cafes: Cafe[], order: SortOrder): Cafe[] {
  if (order === "recommend") {
    return sortByDesc(cafes, (cafe) => cafe.rating);
  }
  return sortByDesc(cafes, (cafe) => Date.parse(cafe.createdAt));
}

export function formatSyncTime(date: Date): string {
  const minutes = Math.floor((Date.now() - date.getTime()) / 60000);
  if (minutes < 1) return "방금 전";
  if (minutes < 60) return `${minutes}분 전`;
  return `${Math.floor(minutes / 60)}시간 전`;
}