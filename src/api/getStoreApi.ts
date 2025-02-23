import axios from 'axios';

interface GetStoreApi {
  category: string;
  limit: number;
}

interface GetStoreAllListApi {
  limit: number;
  pageParam: number;
}

export const getStoreApi = async ({ category, limit }: GetStoreApi) => {
  const response = await axios.get(
    `https://dummyjson.com/products/category/${category}?limit=${limit}`
  );
  return response.data.products;
};

export const getStoreAllListApi = async ({ limit, pageParam }: GetStoreAllListApi) => {
  const response = await axios.get(
    `https://dummyjson.com/products?limit=${limit}&skip=${pageParam}`
  );
  return response.data.products;
};
