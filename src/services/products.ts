import type { Product } from "../Model/Product";

const products: Product[] = [
  { id: '1', name: 'K-Swin V-8 - Masculino', category: 'Tênis', price: 200, descount: 30, image: '/produc-image-1.jpeg' },
  { id: '2', name: 'K-Swin V-5 - Masculino', category: 'Tênis', price: 220, descount: 10, image: '/produc-image-2.jpeg' },
  { id: '3', name: 'K-Swin V-2 - Masculino', category: 'Tênis', price: 160, descount: 30, image: '/produc-image-3.jpeg' },
  { id: '4', name: 'K-Swin V-6 - Masculino', category: 'Tênis', price: 190, descount: 40, image: '/produc-image-4.jpeg' },
  { id: '5', name: 'K-Swin V-1 - Masculino', category: 'Tênis', price: 100, descount: 20, image: '/produc-image-5.jpeg' },
];

export { products }