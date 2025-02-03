import { FilterIcon } from '@/views/components/icons/FilterIcon.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MONTHS } from '@/app/config/constants.ts';
import { SliderOption } from '@/views/pages/Dashboard/components/Transactions/SliderOption.tsx';
import { SliderNavigation } from '@/views/pages/Dashboard/components/Transactions/SliderNavigation.tsx';
import { formatCurrency } from '@/app/utils/formatCurrency.ts';
import { CategoryIcon } from '@/views/components/icons/Categories/CategoryIcon.tsx';
import { cn } from '@/lib/utils.ts';
import { useTransactionsController } from '@/views/pages/Dashboard/components/Transactions/useTransactionsController.ts';
import { Spinner } from '@/views/components/Loading/Spinner';
import emptyState from '@/assets/empty-state.svg';
import { TransactionTypeDropdown } from '@/views/pages/Dashboard/components/Transactions/TransactionTypeDropdown.tsx';
import { FiltersModal } from '@/views/pages/Dashboard/components/Modals/FiltersModal';

export function Transactions() {
  const {
    areValuesVisible,
    isInitialLoading,
    transactions,
    isLoading,
    handleChangeFilters,
    filters,
    isFiltersModalOpen,
    handleOpenFiltersModal,
    handleCloseFiltersModal,
  } = useTransactionsController();

  const hasTransactions = transactions?.length > 0;

  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full p-10 flex flex-col">
      {isInitialLoading && (
        <div className="flex items-center justify-center h-full w-full">
          <Spinner className="w-10 h-10" />
        </div>
      )}

      {!isInitialLoading && (
        <>
          <FiltersModal open={isFiltersModalOpen} onClose={handleCloseFiltersModal} />

          <header>
            <div className="flex justify-between items-center">
              <TransactionTypeDropdown
                onSelect={handleChangeFilters('type')}
                selectedType={filters.type}
              />
              <button type="button" onClick={handleOpenFiltersModal}>
                <FilterIcon />
              </button>
            </div>

            <div className="mt-6 relative">
              <Swiper slidesPerView={3} centeredSlides>
                <SliderNavigation />
                {MONTHS.map((month, index) => (
                  <SwiperSlide key={month}>
                    {({ isActive }) => (
                      <SliderOption isActive={isActive} month={month} index={index} />
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </header>

          <div className="mt-4 space-y-2 flex-1 overflow-y-auto">
            {isLoading && (
              <div className="flex flex-col items-center h-full justify-center">
                <Spinner className="w-10 h-10" />
              </div>
            )}

            {!hasTransactions && !isLoading && (
              <div className="flex flex-col items-center h-full justify-center">
                <img src={emptyState} alt="empty state ilustration" />
                <p className="text-gray-700">Não encontramos nenhuma transação!</p>
              </div>
            )}

            {hasTransactions && !isLoading && (
              <>
                <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
                  <div className="flex-1 flex items-center gap-3">
                    <CategoryIcon type="EXPENSE" />

                    <div>
                      <strong className="font-bold tracking-[-0.5px] block">Almoço</strong>
                      <span className="text-sm text-gray-600">04/02/2024</span>
                    </div>
                  </div>

                  <span
                    className={cn(
                      'text-red-800 tracking-[-0.5px] font-medium',
                      !areValuesVisible && 'blur-sm',
                    )}
                  >
                    - {formatCurrency(1200)}
                  </span>
                </div>

                <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
                  <div className="flex-1 flex items-center gap-3">
                    <CategoryIcon type="INCOME" />

                    <div>
                      <strong className="font-bold tracking-[-0.5px] block">Almoço</strong>
                      <span className="text-sm text-gray-600">04/02/2024</span>
                    </div>
                  </div>

                  <span
                    className={cn(
                      'text-green-800 tracking-[-0.5px] font-medium',
                      !areValuesVisible && 'blur-sm',
                    )}
                  >
                    {formatCurrency(1200)}
                  </span>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
}
