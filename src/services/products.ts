import type { Product, ProductAPI } from "../Model/Product";
import { getDescount } from "../utils/getDescount";
import { api } from "./api";

export async function getAllProducts(): Promise<Product[]> {
  try {
    const response = await api.get('/products');

    const productsApi: ProductAPI[] = response.data;
    return productsApi.map(item => ({
      ...item,
      slug: `${item.id}-${item.title.replace(' ','-')}`,
      descount: getDescount(item.id),
    }));
  } catch (error) {
    console.log(error);
    return [];
  }
}

export async function getSomeProducts(): Promise<Product[]> {
  const list = await getAllProducts();

  return list.filter(item => item.descount > 15);
}

export async function getProductHigh(): Promise<Product> {
  const list = await getAllProducts();

  const sort = list.sort((a, b) => a.rating.count < b.rating.count ? 1 : -1)

  return sort[0];
}
