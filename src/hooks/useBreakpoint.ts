import { useEffect, useState } from 'react';

const getDeviceConfig = (width: number) => {
  if (width < 576) {
    return 'xs';
  }
  if (width < 768) {
    return 'sm';
  }
  if (width < 992) {
    return 'md';
  }
  if (width < 1200) {
    return 'lg';
  }
  return 'xl';
};

const useBreakpoint = () => {
  const [brkPnt, setBrkPnt] = useState(() =>
    getDeviceConfig(window.innerWidth)
  );

  useEffect(() => {
    const calcInnerWidth = () => {
      setBrkPnt(getDeviceConfig(window.innerWidth));
    };
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  const xs = brkPnt === 'xs';
  const sm = brkPnt === 'sm';
  const md = brkPnt === 'md';
  const lg = brkPnt === 'lg';
  const xl = brkPnt === 'xl';

  return {
    xs,
    sm,
    md,
    lg,
    xl,
  };
};
export default useBreakpoint;

export function useMediaQuery(query: string): boolean {
  const getMatches = (q: string): boolean => {
    if (typeof window !== 'undefined') {
      return window.matchMedia(q).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState(getMatches(query));

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = () => setMatches(mediaQueryList.matches);

    mediaQueryList.addEventListener('change', listener);
    return () => mediaQueryList.removeEventListener('change', listener);
  }, [query]);

  return matches;
}
