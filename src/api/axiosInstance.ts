interface RequestConfig {
  params?: Record<string, string | number | boolean>;
  headers?: Record<string, string>;
  method?: string;
  data?: unknown;
}

const BASE_URL = 'https://dummyjson.com/products';
const instance = async (url: string, config: RequestConfig = {}) => {
  let baseURL = `${BASE_URL}${url}`;

  if (config.params) {
    const params = new URLSearchParams();
    Object.entries(config.params).forEach(([key, value]) => {
      params.append(key, String(value));
    });
    baseURL += `?${params.toString()}`;
  }

  const headers = {
    'Content-Type': 'application/json',
    ...config.headers,
  };

  const options = {
    method: config.method || 'GET',
    body: config.data ? JSON.stringify(config.data) : undefined,
    headers,
  };

  const response = await fetch(baseURL, options);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
};

export default instance;
