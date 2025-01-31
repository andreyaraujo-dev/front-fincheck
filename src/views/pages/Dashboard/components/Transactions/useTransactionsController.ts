import { useDashboard } from '@/app/hooks/useDashboard.ts';

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();

  return { areValuesVisible };
}
