import axios from 'axios';
import { Product } from '../types/card';

interface GetStoreApi {
  category: string;
  limit: number;
}

interface GetStoreAllListApi {
  limit: number;
  pageParam: number;
}

const API = 'https://dummyjson.com/products';

export const getStoreApi = async ({ category, limit }: GetStoreApi) => {
  const response = await axios.get(`${API}/category/${category}?limit=${limit}`);
  return response.data.products;
};

export const getStoreAllListApi = async ({ limit, pageParam }: GetStoreAllListApi) => {
  const response = await axios.get(`${API}?limit=${limit}&skip=${pageParam}`);
  return response.data.products;
};

export const getStoreDetailApi = async (id: string | undefined): Promise<Product> => {
  const response = await axios.get(`${API}/${id}`);
  return response.data;
};

export const getStoreDetail = async (category: string | undefined) => {
  const response = await axios.get(`${API}/category/${category}?limit=5`);
  return response.data.products;
};
