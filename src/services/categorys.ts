import type { Category } from "../Model/Category";
import { api } from "./api";

interface CategoryApiSearch {
  limit: number;
  page: number;
  total: number;
  data: Category[]
}

export async function getCategories(): Promise<Category[]> {
  const response = await api.get('/category');
  const data: CategoryApiSearch = response.data;

  return data.data;
}