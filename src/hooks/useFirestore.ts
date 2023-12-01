import { useCallback, useState } from 'react';
import { FirebaseError } from 'firebase/app';
import { collection, doc, getDoc, onSnapshot } from 'firebase/firestore';
import { useSnackbar } from 'notistack';

import { FirestoreCollections } from '~configs/enums';
import { database } from '~configs/firebaseConfig';

function useFirestore<T>(collectionName: FirestoreCollections) {
  type DataWithId = { id: string } & T;
  type Callback = (data: DataWithId[]) => void;

  const { enqueueSnackbar } = useSnackbar();
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
            enqueueSnackbar(err.message, { variant: 'error' });
          }

          enqueueSnackbar('Ocurrió un error inesperado.', {
            variant: 'error',
          });
        }
      });
    },
    [collectionName, enqueueSnackbar]
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
