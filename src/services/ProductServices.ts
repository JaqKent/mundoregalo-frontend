import { toast } from 'react-toastify';
import { initializeApp } from 'firebase/app';
import { collection, getDocs, getFirestore } from 'firebase/firestore';

import { firebaseConfig } from '~configs/firebaseConfig';

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export const getProducts = async () => {
  try {
    const productsCollection = collection(db, 'products');
    const productsSnapshot = await getDocs(productsCollection);

    const productsData = productsSnapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data(),
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
