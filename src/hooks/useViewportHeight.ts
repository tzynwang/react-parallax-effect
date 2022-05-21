import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';

function useViewportHeight(): number {
  // States
  const [innerHeight, setInnerHeight] = useState<number>(0);

  // Functions
  const handleResize = (): void => {
    setInnerHeight(window.innerHeight);
  };
  const debouncedHandleResize = debounce(handleResize, 300);

  // Hooks
  useEffect(() => {
    setInnerHeight(window.innerHeight);
    window.addEventListener('resize', debouncedHandleResize);
    return () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);

  // Main
  return innerHeight;
}

export default useViewportHeight;
