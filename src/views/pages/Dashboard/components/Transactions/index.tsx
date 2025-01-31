import { TransactionsIcon } from '@/views/components/icons/TransactionsIcon.tsx';
import { ChevronDownIcon } from 'lucide-react';
import { FilterIcon } from '@/views/components/icons/FilterIcon.tsx';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MONTHS } from '@/app/config/constants.ts';
import { SliderOption } from '@/views/pages/Dashboard/components/Transactions/SliderOption.tsx';
import { SliderNavigation } from '@/views/pages/Dashboard/components/Transactions/SliderNavigation.tsx';
import { formatCurrency } from '@/app/utils/formatCurrency.ts';
import { CategoryIcon } from '@/views/components/icons/Categories/CategoryIcon.tsx';

export function Transactions() {
  return (
    <div className="bg-gray-100 rounded-2xl w-full h-full p-10 flex flex-col">
      <header>
        <div className="flex justify-between items-center">
          <button type="button" className="flex items-center gap-2">
            <TransactionsIcon />
            <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">Transações</span>
            <ChevronDownIcon className="text-gray-900" />
          </button>

          <button type="button">
            <FilterIcon />
          </button>
        </div>

        <div className="mt-6 relative">
          <Swiper slidesPerView={3} centeredSlides>
            <SliderNavigation />
            {MONTHS.map((month, index) => (
              <SwiperSlide key={month}>
                {({ isActive }) => <SliderOption isActive={isActive} month={month} index={index} />}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </header>

      <div className="mt-4 space-y-2 flex-1 overflow-y-auto">
        <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center gap-3">
            <CategoryIcon type="EXPENSE" />

            <div>
              <strong className="font-bold tracking-[-0.5px] block">Almoço</strong>
              <span className="text-sm text-gray-600">04/02/2024</span>
            </div>
          </div>

          <span className="text-red-800 tracking-[-0.5px] font-medium">
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

          <span className="text-green-800 tracking-[-0.5px] font-medium">
            {formatCurrency(1200)}
          </span>
        </div>

        <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center gap-3">
            <CategoryIcon type="EXPENSE" />

            <div>
              <strong className="font-bold tracking-[-0.5px] block">Almoço</strong>
              <span className="text-sm text-gray-600">04/02/2024</span>
            </div>
          </div>

          <span className="text-red-800 tracking-[-0.5px] font-medium">
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

          <span className="text-green-800 tracking-[-0.5px] font-medium">
            {formatCurrency(1200)}
          </span>
        </div>

        <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center gap-3">
            <CategoryIcon type="EXPENSE" />

            <div>
              <strong className="font-bold tracking-[-0.5px] block">Almoço</strong>
              <span className="text-sm text-gray-600">04/02/2024</span>
            </div>
          </div>

          <span className="text-red-800 tracking-[-0.5px] font-medium">
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

          <span className="text-green-800 tracking-[-0.5px] font-medium">
            {formatCurrency(1200)}
          </span>
        </div>

        <div className="bg-white p-4 rounded-2xl flex items-center justify-between gap-4">
          <div className="flex-1 flex items-center gap-3">
            <CategoryIcon type="EXPENSE" />

            <div>
              <strong className="font-bold tracking-[-0.5px] block">Almoço</strong>
              <span className="text-sm text-gray-600">04/02/2024</span>
            </div>
          </div>

          <span className="text-red-800 tracking-[-0.5px] font-medium">
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

          <span className="text-green-800 tracking-[-0.5px] font-medium">
            {formatCurrency(1200)}
          </span>
        </div>
      </div>
    </div>
  );
}
