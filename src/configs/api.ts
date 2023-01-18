import { create } from 'apisauce';

export const api = create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    withCredentials: true,
    timeout: 15000,
});
