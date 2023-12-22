import { useCallback, useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore';

import { FirestoreCollections } from '~configs/enums';
import { database } from '~configs/firebaseConfig';

function useFirestore<T>(
  collectionName: FirestoreCollections,
  onErrorCallback: (message: string) => void
) {
  type DataWithId = { id: string } & T;
  type Callback = (data: DataWithId[]) => void;

  const [fetchLoading, setFetchLoading] = useState(true);

  const subscribeToData = useCallback(
    (callback: Callback) => {
      setFetchLoading(true);
      const collectionRef = collection(database, collectionName);

      return onSnapshot(collectionRef, (snapshot) => {
        try {
          setFetchLoading(false);

          const response = snapshot.docs.map((item) => ({
            ...(item.data() as T),
            id: item.id,
          }));

          callback(response);
        } catch (err: unknown) {
          setFetchLoading(false);

          if (err instanceof FirebaseError) {
            onErrorCallback(err.message);
          } else {
            onErrorCallback('Ocurrió un error inesperado.');
          }
        }
      });
    },
    [collectionName, onErrorCallback]
  );

  const getDocument = async (documentId: string) => {
    const docRef = doc(database, collectionName, documentId);

    const response = await getDoc(docRef);

    return response.data() as T;
  };

  return {
    getDocument,
    fetchLoading,
    subscribeToData,
  };
}

export default useFirestore;
