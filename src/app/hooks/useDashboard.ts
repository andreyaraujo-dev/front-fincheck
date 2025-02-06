import { DashboardContext } from '@/app/context/DashboardContext.tsx';
import { useContext } from 'react';

export function useDashboard() {
  return useContext(DashboardContext);
}
