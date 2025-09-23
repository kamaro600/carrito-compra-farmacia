export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  category: ProductCategory;
  imageUrl?: string;
  quantity: number; // para manejar cantidad en el carrito
}

export enum ProductCategory {
  ANALGESICS = 'analgesics',
  VITAMINS = 'vitamins',
  ANTIBIOTICS = 'antibiotics',
  DERMATOLOGY = 'dermatology'
}

export interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  subtotal: number;
}