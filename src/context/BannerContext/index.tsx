/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { collection, onSnapshot } from 'firebase/firestore';

import { FirestoreCollections } from '~configs/enums';
import { database } from '~configs/firebaseConfig';
import { BannerDocument } from '~interfaces/Products';

interface BannerContextProps {
  banners: BannerDocument[];
  slider: string[];
  header: string[];
  isLoading: boolean;
  fetchBanners: () => void;
  getBannerById: (id: string) => BannerDocument | undefined;
}

export const BannerContext = createContext<BannerContextProps>({
  banners: [],
  slider: [],
  header: [],
  isLoading: true,
  fetchBanners: () => {},
  getBannerById: () => undefined,
});

export default function BannerProvider({ children }: { children: ReactNode }) {
  const [banners, setBanners] = useState<BannerDocument[]>([]);
  const [slider, setSlider] = useState<string[]>([]);
  const [header, setHeader] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBanners = useCallback(() => {
    setLoading(true);
    const ref = collection(database, FirestoreCollections.Banners);

    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        const bannersData: BannerDocument[] = [];
        const sliderData: string[] = [];
        const headerData: string[] = [];

        snapshot.docs.forEach((doc) => {
          const { id } = doc;
          const data = doc.data();

          if (id === 'slider') {
            sliderData.push(...(data.images ?? []));
          } else if (id === 'header') {
            headerData.push(...(data.images ?? []));
          } else {
            bannersData.push({
              ...(data as Omit<BannerDocument, 'id'>),
              id,
            });
          }
        });

        setBanners(bannersData);
        setSlider(sliderData);
        setHeader(headerData);
        setLoading(false);
      },
      () => setLoading(false)
    );

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    fetchBanners();
  }, [fetchBanners]);

  const getBannerById = (id: string) =>
    banners.find((banner) => banner.id === id);

  const value = useMemo(
    () => ({
      banners,
      slider,
      header,
      isLoading: loading,
      fetchBanners,
      getBannerById,
    }),
    [banners, slider, header, loading, fetchBanners, getBannerById]
  );

  return (
    <BannerContext.Provider value={value}>{children}</BannerContext.Provider>
  );
}
