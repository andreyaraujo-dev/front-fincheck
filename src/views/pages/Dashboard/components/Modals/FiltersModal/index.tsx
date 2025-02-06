import { Modal } from '@/views/components/Modal';
import { Button } from '@/views/components/ui/button.tsx';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { useFiltersModal } from '@/views/pages/Dashboard/components/Modals/FiltersModal/useFiltersModal.ts';
import { cn } from '@/lib/utils.ts';

interface FiltersModalProps {
  open: boolean;
  onClose?: () => void;
  onApplyFilters(filters: { bankAccountId?: string | undefined; year: number }): void;
}

export function FiltersModal({ open, onClose, onApplyFilters }: FiltersModalProps) {
  const {
    selectedBankAccountId,
    handleSelectBankAccount,
    selectedYear,
    handleChangeYear,
    accounts,
  } = useFiltersModal();

  return (
    <Modal open={open} title="Filtros" onClose={onClose}>
      <div>
        <span className="text-lg trackinh-[-1px] font-bold text-gray-800">Conta</span>

        <div className="space-y-2 mt-2">
          {accounts.map((account) => (
            <Button
              key={account.id}
              variant="secondary"
              type="button"
              className={cn(
                'rounded-2xl justify-start text-left tet-gray-800 bg-transparent shadow-none font-normal',
                account.id === selectedBankAccountId && '!bg-gray-200',
              )}
              onClick={() => handleSelectBankAccount(account.id)}
            >
              {account.name}
            </Button>
          ))}
        </div>
      </div>

      <div className="mt-10 text-gray-800">
        <span className="text-lg trackinh-[-1px] font-bold ">Ano</span>

        <div className="mt-2 w-52 flex items-center justify-between gap-4">
          <Button
            onClick={() => handleChangeYear(-1)}
            variant="secondary"
            className="w-12 h-12 flex items-center justify-center bg-transparent rounded-full shadow-none"
          >
            <ChevronLeftIcon className="w-6 h-6" />
          </Button>
          <div className="flex-1 text-center">
            <span className="tet-sm font-medium tracking-[-0.5px]">{selectedYear}</span>
          </div>
          <Button
            onClick={() => handleChangeYear(+1)}
            variant="secondary"
            className="w-12 h-12 flex items-center justify-center bg-transparent rounded-full shadow-none"
          >
            <ChevronRightIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <Button
        onClick={() =>
          onApplyFilters({
            bankAccountId: selectedBankAccountId || undefined,
            year: selectedYear,
          })
        }
      >
        Aplicar Filtros
      </Button>
    </Modal>
  );
}
