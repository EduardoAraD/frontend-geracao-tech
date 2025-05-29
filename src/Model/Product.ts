export interface ProductAPI {
  id: number
  title: string
  image: string
  category: string
  price: number
  description: string;
  rating: {
    rate: number;
    count: number;
  }
}

export interface Product extends ProductAPI {
  slug: string
  descount: number
}
