export interface Product {
  id: string;
  name: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  description: string;
  amountOnStock: number;
  price: number;
  reviews: [];
  keyFacts: [];
  inStockSinceInMs: number;
  thumbnailImageUrl: string;
  previewImagesUrls: string[];
  brand?: string;
  discountedPrice?: number;
  colors?: string[];
}
