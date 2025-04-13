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
  const response = await instance(request.getStoreApi(category), {
    params: { limit },
  });
  return response.products;
};

export const getStoreAllListApi = async ({ limit, pageParam }: GetStoreAllListApi) => {
  const response = await instance(request.getStoreAllListApi, {
    params: {
      limit,
      skip: pageParam,
    },
  });
  return response.products;
};

export const getStoreDetailApi = async (id: string | undefined): Promise<Product> => {
  const response = await instance(request.getStoreDetailApi(id));
  return response;
};

export const getStoreDetail = async (category: string | undefined, limit: number) => {
  const response = await instance(request.getStoreDetailRecommendedProduct(category), {
    params: { limit },
  });
  return response.products;
};
