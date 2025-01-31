import { useDashboard } from '@/app/hooks/useDashboard.ts';

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();
  const isInitialLoading = false;

  return { areValuesVisible, isInitialLoading, isLoading: false, transactions: [] };
}
