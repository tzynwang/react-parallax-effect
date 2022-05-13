import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

function useIsScrollTopZero(): boolean {
  // States
  const [isTop, setIsTop] = useState(true);

  // Functions
  const handleScroll = (): void => {
    if (!window.scrollY) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  };
  const debouncedHandleScroll = debounce(handleScroll, 300);

  // Hooks
  useEffect(() => {
    window.addEventListener('scroll', debouncedHandleScroll);
    () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, []);

  // Main
  return isTop;
}

export default useIsScrollTopZero;
