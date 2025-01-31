import { useState } from 'react';
import { useWindowWidth } from '@/app/hooks/useWindowWidth.ts';
import { useDashboard } from '@/app/hooks/useDashboard.ts';

export function useAccountsController() {
  const windowWidth = useWindowWidth();
  const { areValuesVisible, toggleValuesVisibility } = useDashboard();
  const [sliderState, setSliderState] = useState({
    isBeginning: true,
    isEnd: false,
  });
  const isLoading = false;

  return {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading,
    accounts: [],
  };
}
