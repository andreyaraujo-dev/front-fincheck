import axios from 'axios';
import { localStorageKeys } from '@/app/config/localStorageKeys.ts';
import { sleep } from '@/app/utils/sleep.ts';

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

httpClient.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem(localStorageKeys.ACCESS_TOKEN);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

httpClient.interceptors.response.use(async (config) => {
  await sleep(2000);
  return config;
});

export { httpClient };
