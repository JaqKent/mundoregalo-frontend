import {
    createContext,
    ReactNode,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { toast } from 'react-toastify';
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore';

import { DEFAULT_PRODUCT } from './constants';

import { FirestoreCollections } from '~configs/enums';
import { database } from '~configs/firebaseConfig';
import { Product } from '~interfaces/Products';

interface ContextProps {
    allProducts: Product[];
    singleProduct: Product;
    gatherProducts: () => void;
    gatherSingleProduct: (id: string) => void;
    isLoading: boolean;
}

export const ProductContext = createContext<ContextProps>({
    allProducts: [],
    singleProduct: DEFAULT_PRODUCT,
    isLoading: true,
    gatherProducts: () => {},
    gatherSingleProduct: () => {},
});

export default function ProductProvider({ children }: { children: ReactNode }) {
    const [allProducts, setAllProducts] = useState<Product[]>([]);
    const [singleProduct, setSingleProduct] =
        useState<Product>(DEFAULT_PRODUCT);
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
                const productsData: Product[] = snapshot.docs.map(
                    (document) => ({
                        ...(document.data() as Product),
                        id: document.id,
                    })
                );
                console.log('Products Data from Firestore:', productsData);

                setAllProducts(productsData);
                setLoading(false);
            },
            (error) => {
                console.log('Ocurrió un error trayendo los datos', error);
                setLoading(false);
            }
        );

        return () => {
            unsubscribe();
        };
    }, []);

    const gatherSingleProduct = useCallback(async (id: string) => {
        setLoading(true);

        const productDocRef = doc(database, FirestoreCollections.Products, id);

        try {
            const docSnapshot = await getDoc(productDocRef);

            if (docSnapshot.exists()) {
                const productData: Product = {
                    ...(docSnapshot.data() as Product),
                    id,
                };

                setSingleProduct(productData);
            } else {
                // Maneja el caso cuando el producto no existe
                setSingleProduct(DEFAULT_PRODUCT);
                toast.error('El producto no existe');
            }
        } catch (error) {
            console.log('Ocurrió un error trayendo el producto', error);
            toast.error('Ocurrió un error trayendo el producto');
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        gatherProducts();
    }, [gatherProducts]);

    const value = useMemo(() => {
        return {
            allProducts,
            singleProduct,
            isLoading: loading,
            gatherProducts,
            gatherSingleProduct,
        };
    }, [
        allProducts,
        singleProduct,
        loading,
        gatherProducts,
        gatherSingleProduct,
    ]);

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
}
