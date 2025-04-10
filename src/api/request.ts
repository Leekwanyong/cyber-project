const request = {
  getStoreApi: (category: string) => `/category/${category}`,
  getStoreAllListApi: '/',
  getStoreDetailApi: (id: string | undefined) => `/${id}`,
  getStoreDetailRecommendedProduct: (category: string | undefined) => `/category/${category}`,
};

export default request;
