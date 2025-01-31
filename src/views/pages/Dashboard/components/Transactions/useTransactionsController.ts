import { useDashboard } from '@/app/hooks/useDashboard.ts';

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();
  const isLoading = false;

  return { areValuesVisible, isLoading };
}
