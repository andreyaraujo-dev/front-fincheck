import { useDashboard } from '@/app/hooks/useDashboard.ts';
import { useState } from 'react';
import { Transaction } from '@/app/entities/Transaction.ts';

export type TransactionsFilters = {
  month: number;
  year: number;
  bankAccountId?: string;
  type?: Transaction['type'];
};

export function useTransactionsController() {
  const { areValuesVisible } = useDashboard();
  const [filters, setFilters] = useState<TransactionsFilters>({
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
  });
  const isInitialLoading = false;

  function handleChangeFilters<TFilter extends keyof TransactionsFilters>(filter: TFilter) {
    return (value: TransactionsFilters[TFilter]) => {
      if (value === filters[filter]) return;

      setFilters((prevState) => ({
        ...prevState,
        [filter]: value,
      }));
    };
  }

  return {
    areValuesVisible,
    isInitialLoading,
    isLoading: false,
    transactions: [],
    handleChangeFilters,
    filters,
  };
}
