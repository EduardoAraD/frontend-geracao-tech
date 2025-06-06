import type { GenderProduct } from "./GenderProduct"
import type { OptionProduct } from "./OptionProduct";
import type { StateProduct } from "./ProductState"

export interface Product {
  id: number;
  enabled: boolean;
  name: string;
  slug: string;
  use_in_menu: boolean;
  stock: number;
  description: string;
  price: number;
  price_with_discount: number;
  rate: number;
  mark: string;
  gender: GenderProduct;
  state: StateProduct;
  createdAt: string;
  updatedAt: string;
  images: string[];
  options: OptionProduct[];
  categorys: {
    id: number;
    name: string;
  }[];
}

export const emptyProduct: Product = {
  id: -1,
  name: '',
  images: [],
  price: -1,
  price_with_discount: -1,
  description: '',
  rate: 5,
  slug: '',
  mark: '',
  gender: 'unisex',
  state: 'new',
  use_in_menu: false,
  enabled: false,
  stock: 0,
  options: [],
  categorys: [],
  createdAt: '',
  updatedAt: '',
}
