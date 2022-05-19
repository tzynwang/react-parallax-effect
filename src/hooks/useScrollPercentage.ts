import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash';
import mathRoundTwoDecimal from '@Tools/mathRoundTwoDecimal';

function useScrollPercentage(): number {
  // States
  const [percentage, setPercentage] = useState<number>(0);

  // Functions
  const handleScroll = (): void => {
    setPercentage(window.scrollY / document.body.scrollHeight);
  };
  const debouncedHandleScroll = debounce(handleScroll, 300);

  // Hooks
  useEffect(() => {
    window.addEventListener('scroll', debouncedHandleScroll);
    () => () => window.removeEventListener('scroll', debouncedHandleScroll);
  }, []);

  // Main
  return mathRoundTwoDecimal(percentage);
}

export default useScrollPercentage;
