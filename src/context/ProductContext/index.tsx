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
    const [loading, setLoading] = useState(false);

    const gatherProducts = useCallback(() => {
        setLoading(true);
        getProducts()
            .then(({ data }) => {
                if (data) {
                    setProducts(data.response);
                } else {
                    toast.error(
                        'Ocurrió un error trayendo los datos,por favor refresque la página'
                    );
                }
            })
            .catch(() => {
                toast.error('Ocurrió un error trayendo los datos');
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        gatherProducts();
    }, [gatherProducts]);

    const value = {
        products,
        isLoading: loading,
        gatherProducts,
    };
    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
}
