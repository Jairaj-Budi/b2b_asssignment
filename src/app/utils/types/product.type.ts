export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  imageUrl: string;
  isInCart?: boolean;
  created_at: Date;
  updated_at: Date;
} 