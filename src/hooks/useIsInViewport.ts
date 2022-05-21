import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import useViewportHeight from '@Hooks/useViewportHeight';

function useIsInViewport(target: React.RefObject<HTMLDivElement>): boolean {
  const viewportHeight = useViewportHeight();
  const [isInViewport, setIsInViewport] = useState<boolean>(false);

  // Functions
  const handleScroll = (): void => {
    if (target.current && viewportHeight) {
      setIsInViewport(target.current.getBoundingClientRect().top < 60 && target.current.getBoundingClientRect().bottom > viewportHeight * 0.75);
    }
  };
  const debouncedHandleScroll = debounce(handleScroll, 50);

  // Hooks
  useEffect(() => {
    window.addEventListener('scroll', debouncedHandleScroll);
    return () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, [target.current, viewportHeight]);

  // Main
  return isInViewport;
}

export default useIsInViewport;
