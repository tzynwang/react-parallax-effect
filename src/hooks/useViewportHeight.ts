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
    window.addEventListener('resize', debouncedHandleResize);
    () => () => window.removeEventListener('resize', debouncedHandleResize);
  }, []);

  return innerHeight;
}

export default useViewportHeight;
