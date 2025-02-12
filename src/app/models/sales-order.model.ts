export interface SalesOrder {
  id: string;
  customer_name: string;
  customer_email: string;
  customer_mobile: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  order_date: Date;
  total_amount: number;
  products: {
    product_id: string;
    quantity: number;
    price: number;
  }[];
  created_at: Date;
  updated_at: Date;
}