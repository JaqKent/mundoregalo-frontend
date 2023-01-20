import { api } from '~configs/api';

interface getProducts {
    success: boolean;
    response: Product[];
}

export const getProducts = () => api.get<getProducts>('/products/get');
