import { useState } from 'react';
import { useBankAccounts } from '@/app/hooks/useBankAccounts.ts';
import { useDashboard } from '@/app/hooks/useDashboard.ts';

export function useFiltersModal() {
  const [selectedBankAccountId, setSelectedBankAccountId] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [countSelectedFilters, setCountSelectedFilters] = useState<number>(0);

  const { accounts } = useBankAccounts();

  const { openNewAccountModal } = useDashboard();

  function handleSelectBankAccount(bankAccountId: string) {
    setSelectedBankAccountId((prevState) => (prevState === bankAccountId ? null : bankAccountId));
  }

  function handleChangeYear(step: number) {
    setSelectedYear((prevState) => prevState + step);
  }

  function handleUpdateCountFilters() {
    setCountSelectedFilters(() => {
      let newState = 0;
      const hasYearBeenChanged = new Date().getFullYear() !== selectedYear;
      if (hasYearBeenChanged) {
        newState += 1;
      }

      if (selectedBankAccountId) {
        newState += 1;
      }

      return newState;
    });
  }

  function handleClearFilters() {
    setSelectedBankAccountId(null);
    setSelectedYear(new Date().getFullYear());
    setCountSelectedFilters(0);
  }

  return {
    handleSelectBankAccount,
    selectedBankAccountId,
    selectedYear,
    handleChangeYear,
    accounts,
    handleUpdateCountFilters,
    countSelectedFilters,
    handleClearFilters,
    openNewAccountModal,
  };
}
