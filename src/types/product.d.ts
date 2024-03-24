export interface ProductType {
  id: string;
  title: string;
  description: string;
  images: string[];
  price: number;
  discount: number;
  stock: number;
  isAvailable: boolean;
  brand: Brand;
  categories: {
    id: string;
    title: string;
    description: string;
  }[];
}

export interface Brand {
  id: string;
  name: string;
}
