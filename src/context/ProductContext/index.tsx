import {
    createContext,
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { toast } from 'react-toastify';
import { collection, onSnapshot } from 'firebase/firestore';

import { FirestoreCollections } from '~configs/enums';
import { database } from '~configs/firebaseConfig';
import { Product } from '~interfaces/Products';

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

        const productsCollection = collection(
            database,
            FirestoreCollections.Products
        );

        const unsubscribe = onSnapshot(
            productsCollection,
            (snapshot) => {
                const productsData: Product[] = snapshot.docs.map((doc) => ({
                    ...(doc.data() as Product),
                    id: doc.id,
                }));

                console.log('Productos obtenidos:', productsData);

                setProducts(productsData);
                setLoading(false);
            },
            (error) => {
                console.error(
                    'Error al obtener productos desde Firebase:',
                    error
                );

                toast.error(
                    'Ocurrió un error trayendo los datos desde Firebase'
                );
                setLoading(false);
            }
        );

        return () => {
            console.log('Desuscribiendo de la colección de productos');
            unsubscribe();
        };
    }, []);

    useEffect(() => {
        gatherProducts();
    }, [gatherProducts]);

    const value = useMemo(() => {
        return {
            products,
            isLoading: loading,
            gatherProducts,
        };
    }, [products, loading, gatherProducts]);

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
}
