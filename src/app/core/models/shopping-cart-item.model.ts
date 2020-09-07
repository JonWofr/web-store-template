import { Product } from './product.model';

export interface ShoppingCartItem {
  id: string;
  product: Product;
  quantity: number;
  price: number;
  size?: number;
  color?: string;
}
