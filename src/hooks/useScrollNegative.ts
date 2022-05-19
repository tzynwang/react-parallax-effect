import { useState, useEffect } from 'react';

function useScrollNegative(): boolean {
  const [toNegative, setToNegative] = useState<boolean>(false);

  const handleWheel = (e: WheelEvent): void => {
    setToNegative(e.deltaY < 0);
  };

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, []);

  return toNegative;
}

export default useScrollNegative;
