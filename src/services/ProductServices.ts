import { api } from '~configs/api';
import { Product } from '~interfaces/Products';

interface getProducts {
    success: boolean;
    response: Product[];
}

export const getProducts = () => api.get<getProducts>('/products/get');
