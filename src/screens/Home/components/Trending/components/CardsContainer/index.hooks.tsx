import { useCallback, useContext, useEffect, useState } from 'react';

import { ProductContext } from '~context/ProductContext';

function useTrending() {
  const [auto, setAuto] = useState(false);
  const { allProducts } = useContext(ProductContext);

  const slideLength = allProducts.length;

  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prevIndex) =>
      prevIndex === Math.floor(slideLength / 2) - 1 ? 0 : prevIndex + 1
    );
  }, [slideLength]);

  const prevSlide = () => {
    setCurrent((prevIndex) =>
      prevIndex === 0 ? Math.floor(slideLength / 2) - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    let timeoutId: number;

    if (auto) {
      timeoutId = window.setTimeout(() => {
        nextSlide();
      }, 3000);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [current, auto, nextSlide]);

  return { slideLength, current, allProducts, setAuto, prevSlide, nextSlide };
}
export default useTrending;
