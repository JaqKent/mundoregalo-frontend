import { api } from '~configs/api';
import { Product } from '~interfaces/Products';

interface GetProducts {
    success: boolean;
    response: Product[];
}

export const getProducts = () => api.get<GetProducts>('/products/get');
