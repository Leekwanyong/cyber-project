import { Product } from '../types/card';
import instance from './axiosInstance';
import request from './request';

interface GetStoreApi {
  category: string;
  limit: number;
}

interface GetStoreAllListApi {
  limit: number;
  pageParam: number;
}

export const getStoreApi = async ({ category, limit }: GetStoreApi) => {
  const response = await instance.get(request.getStoreApi(category, limit));
  return response.data.products;
};

export const getStoreAllListApi = async ({ limit, pageParam }: GetStoreAllListApi) => {
  const response = await instance.get(request.getStoreAllListApi(limit, pageParam));
  return response.data.products;
};

export const getStoreDetailApi = async (id: string | undefined): Promise<Product> => {
  const response = await instance.get(request.getStoreDetailApi(id));
  return response.data;
};

export const getStoreDetail = async (category: string | undefined, limit: number) => {
  const response = await instance.get(request.getStoreDetailRecommendedProduct(category, limit));
  return response.data.products;
};
