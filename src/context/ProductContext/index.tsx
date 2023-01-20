import {
    createContext,
    ReactNode,
    useCallback,
    useEffect,
    useState,
} from 'react';
import { toast } from 'react-toastify';
import { Product } from '~interfaces/Products';
import { getProducts } from '~services/ProductServices';

interface ContextProps {
    products: Product[];
    gatherProducts: () => void;
    isLoading: boolean;
}

export const ProductContext = createContext<ContextProps>({
    products: [],
    gatherProducts: () => {},
    isLoading: true,
});

export default function ProductProvider({ children }: { children: ReactNode }) {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState('');

    const gatherProducts = useCallback(() => {
        setLoading('Obteniendo Productos');
        getProducts()
            .then(({ data }) => {
                if (data) {
                    setProducts(data.response);

                    setLoading('');
                } else {
                    toast.error(
                        'Ocurrió un error trayendo los datos,por favor refresque la página'
                    );
                    setLoading('');
                }
            })
            .catch(() => {
                toast.error('Ocurrió un error trayendo los datos');
                setLoading('');
            });
    }, []);

    useEffect(() => {
        gatherProducts();
    }, [gatherProducts]);

    const value = {
        products,
        isLoading: !!loading,
        gatherProducts,
    };
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
}
