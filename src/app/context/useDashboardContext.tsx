/* eslint-disable no-unused-vars */
import { createContext, ReactNode, useCallback, useState } from 'react';

interface DashboardContextValue {
  areValuesVisible: boolean;
  toggleValuesVisibility: () => void;
  openNewTransactionModal: (type: 'INCOME' | 'EXPENSE') => void;
  openNewAccountModal(): void;
  isNewAccountModalOpen: boolean;
  isNewTransactionModalOpen: boolean;
  newTransactionType: 'INCOME' | 'EXPENSE' | null;
}

export const DashboardContext = createContext({} as DashboardContextValue);

export function DashboardProvider({ children }: { children: ReactNode }) {
  const [areValuesVisible, setAreValuesVisible] = useState(true);
  const [isNewAccountModalOpen, setIsNewAccountModalOpen] = useState(false);
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const [newTransactionType, setNewTransactionType] = useState<'INCOME' | 'EXPENSE' | null>(null);

  const toggleValuesVisibility = useCallback(() => {
    setAreValuesVisible((prevVisible) => !prevVisible);
  }, []);

  const openNewTransactionModal = useCallback((type: 'INCOME' | 'EXPENSE') => {
    setNewTransactionType(type);
    setIsNewTransactionModalOpen(true);
  }, []);

  const openNewAccountModal = useCallback(() => {
    setIsNewAccountModalOpen(true);
  }, []);

  return (
    <DashboardContext.Provider
      value={{
        areValuesVisible,
        toggleValuesVisibility,
        openNewTransactionModal,
        openNewAccountModal,
        isNewAccountModalOpen,
        isNewTransactionModalOpen,
        newTransactionType,
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}
