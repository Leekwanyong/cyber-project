type ProductListCategory = 'beauty' | 'vehicle' | 'mobile-accessories';
export type FilterOptions = Record<
  string,
  { id: number; name: string; checked: boolean; brand: string; category: string }[]
>;
export interface Product {
  id: number;
  brand: string;
  description: string;
  thumbnail: string;
  title: string;
  price: number;
}

export interface HomeProductQuery {
  category: ProductListCategory;
  limit: number;
  isLastSection: boolean;
}

export interface InfinityProductListProps {
  isLastSection: boolean;
  filteredBrands: string[];
  limit: number;
}

export interface CategoryListProps {
  isInFirstViewport: boolean;
  isLastSection: boolean;
  index: number;
  item: Product;
}
