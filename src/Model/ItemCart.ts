import type { Product } from "./Product";

export interface ItemCart {
  id: string;
  product: Product;
  quantity: number;
  color: string;
  size: string;
}
