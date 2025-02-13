export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  stock: number;
  image_url: string;
  created_at: string;
  updated_at: string;
  isInCart?: boolean;
}
