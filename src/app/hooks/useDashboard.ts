import { DashboardContext } from '@/app/context/useDashboardContext.tsx';
import { useContext } from 'react';

export function useDashboard() {
  return useContext(DashboardContext);
}
