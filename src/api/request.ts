const request = {
  getStoreApi: (category: string, limit: number) => `/category/${category}?limit=${limit}`,
  getStoreAllListApi: (limit: number, pageParam: number) => `limit=${limit}&skip=${pageParam}`,
  getStoreDetailApi: (id: string | undefined) => `/${id}`,
  getStoreDetailRecommendedProduct: (category: string | undefined, limit: number) =>
    `/category/${category}?limit=${limit}`,
};

export default request;
