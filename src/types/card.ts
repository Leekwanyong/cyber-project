export interface Product {
  id: number;
  brand: string;
  description: string;
  thumbnail: string;
  title: string;
  price: number;
}

type ProductListCategory = 'beauty' | 'vehicle' | 'mobile-accessories';

export interface ProductListProps {
  category: ProductListCategory;
  limit: number;
  pageParam?: number;
}

// Api

export interface GetStoreApi {
  category: string;
  limit: number;
}

export interface GetStoreAllListApi {
  limit: number;
  pageParam: number;
}

export interface CategoryListProps {
  index: number;
  limit: boolean;
  item: Product;
}
