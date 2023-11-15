import { toast } from 'react-toastify';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import { firebaseConfig } from '~configs/firebaseConfig';

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// ...

export const getProducts = async () => {
    try {
        const productsCollection = collection(db, 'products');
        const productsSnapshot = await getDocs(productsCollection);

        const productsData = productsSnapshot.docs.map((doc) => {
            return {
                id: doc.id,
                name: doc.data().name,
                price: doc.data().price,
                description: doc.data().description,
                image: doc.data().images,
                category: doc.data().category,
                stock: doc.data().stock,
                votes: doc.data().votes,
                delivery: doc.data().delivery,
                moreSold: doc.data().moreSold,
                onSale: doc.data().onSale,
                discountPrice: doc.data().discountPrice,
                stars: doc.data().stars,
            };
        });

        return {
            success: true,
            response: productsData,
        };
    } catch (error) {
        toast.error('Ocurrió un error trayendo los datos');
        return {
            success: false,
            response: [],
        };
    }
};

// ...
