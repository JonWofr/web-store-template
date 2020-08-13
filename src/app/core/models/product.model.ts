export interface Product {
  id: string;
  name: string;
  title: string;
  subTitle: string;
  shortDescription: string;
  description: string;
  amountOnStock: number;
  price: number;
  reviews: [];
  keyFacts: [];
  inStockSinceInMs: number;
  brand?: string;
  discountedPrice?: number;
}
