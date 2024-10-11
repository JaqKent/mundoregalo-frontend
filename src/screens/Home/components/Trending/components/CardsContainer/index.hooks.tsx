import { useCallback, useContext, useEffect, useState } from 'react';

import { ProductContext } from '~context/ProductContext';

function useTrending() {
  const [auto, setAuto] = useState(false);
  const { allProducts } = useContext(ProductContext);

  const slideLength = allProducts.length;
  const [current, setCurrent] = useState(0);
  const [itemsPerSlide, setItemsPerSlide] = useState(2);

  const updateItemsPerSlide = () => {
    if (window.innerWidth <= 767) {
      setItemsPerSlide(2);
    } else if (window.innerWidth <= 1365) {
      setItemsPerSlide(4);
    } else {
      setItemsPerSlide(6);
    }
  };

  useEffect(() => {
    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);

    return () => {
      window.removeEventListener('resize', updateItemsPerSlide);
    };
  }, []);

  const nextSlide = useCallback(() => {
    setCurrent((prevIndex) => (prevIndex + 1) % slideLength);
  }, [slideLength]);

  const prevSlide = () => {
    setCurrent((prevIndex) => (prevIndex - 1 + slideLength) % slideLength);
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

  return {
    slideLength,
    current,
    allProducts,
    setAuto,
    prevSlide,
    nextSlide,
    itemsPerSlide,
  };
}

export default useTrending;
