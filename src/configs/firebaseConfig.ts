import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
    apiKey: process.env.VITE_FIREBASE_API_KEY,
    authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.VITE_FIREBASE_MESSAGING_APP_ID,
    measurementId: process.env.VITE_FIREBASE_MESSAGING_MEASURAMENT_ID,
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp);

export { database };
