/* eslint-disable @typescript-eslint/no-explicit-any */
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

interface BannerItem {
  url: string;
  tag: string;
}

interface BannerContextProps {
  banners: BannerDocument[];
  slider: BannerItem[];
  header: BannerItem[];
  mid1: BannerItem[];
  mid2: BannerItem[];
  bottom: BannerItem[];
  isLoading: boolean;
  fetchBanners: () => void;
  getBannerById: (id: string) => BannerDocument | undefined;
}

export const BannerContext = createContext<BannerContextProps>({
  banners: [],
  slider: [],
  header: [],
  mid1: [],
  mid2: [],
  bottom: [],
  isLoading: true,
  fetchBanners: () => {},
  getBannerById: () => undefined,
});

export default function BannerProvider({ children }: { children: ReactNode }) {
  const [banners, setBanners] = useState<BannerDocument[]>([]);
  const [slider, setSlider] = useState<BannerItem[]>([]);
  const [header, setHeader] = useState<BannerItem[]>([]);
  const [mid1, setMid1] = useState<BannerItem[]>([]);
  const [mid2, setMid2] = useState<BannerItem[]>([]);
  const [bottom, setBottom] = useState<BannerItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBanners = useCallback(() => {
    setLoading(true);
    const ref = collection(database, FirestoreCollections.Banners);

    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        const bannersData: BannerDocument[] = [];
        const sliderData: BannerItem[] = [];
        const headerData: BannerItem[] = [];
        const mid1Data: BannerItem[] = [];
        const mid2Data: BannerItem[] = [];
        const bottomData: BannerItem[] = [];

        snapshot.docs.forEach((doc) => {
          const { id } = doc;
          const data = doc.data();

          const formattedImages: BannerItem[] = (data.images ?? []).map(
            (img: any) => ({
              url: img.url ?? img,
              tag: img.tag ?? '',
            })
          );

          switch (id) {
            case 'slider':
              sliderData.push(...formattedImages);
              break;
            case 'header':
              headerData.push(...formattedImages);
              break;
            case 'mid1':
              mid1Data.push(...formattedImages);
              break;
            case 'mid2':
              mid2Data.push(...formattedImages);
              break;
            case 'bottom':
              bottomData.push(...formattedImages);
              break;
            default:
              bannersData.push({
                ...(data as Omit<BannerDocument, 'id'>),
                id,
              });
              break;
          }
        });

        setBanners(bannersData);
        setSlider(sliderData);
        setHeader(headerData);
        setMid1(mid1Data);
        setMid2(mid2Data);
        setBottom(bottomData);
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
      mid1,
      mid2,
      bottom,
      isLoading: loading,
      fetchBanners,
      getBannerById,
    }),
    [
      banners,
      slider,
      header,
      mid1,
      mid2,
      bottom,
      loading,
      fetchBanners,
      getBannerById,
    ]
  );

  return (
    <BannerContext.Provider value={value}>{children}</BannerContext.Provider>
  );
}
