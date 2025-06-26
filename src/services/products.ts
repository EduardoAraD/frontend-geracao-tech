import type { Product } from "../Model/Product";
import { api } from "./api";

interface ProductApiSearch {
  limit: number;
  page: number;
  total: number;
  data: Product[]
}

export async function getProducts(): Promise<Product[]> {
  const response = await api.get('/product');

  const data: ProductApiSearch = response.data;

  return data.data;
}

export async function getSomeProducts(): Promise<Product[]> {
  const response = await api.get('/product?limit=6');

  const productsApi: ProductApiSearch = response.data;

  return productsApi.data;
}

export async function getProductHigh(): Promise<Product> {
  const response = await api.get('/productHigh');

  const product: Product = response.data.product;

  return product;
}

export async function getProduct(id: string): Promise<Product> {
  const response = await api.get(`/product/${id}`);

  const { product } = response.data;

  return product;
}

export async function getProductByCategorys(categorys: number[]): Promise<Product[]> {
  const response = await api.get(`/product?category_ids=${categorys}&limit=8`);

  const productsApi: ProductApiSearch = response.data;

  return productsApi.data;
}
