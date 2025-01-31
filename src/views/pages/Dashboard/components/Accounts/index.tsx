import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { EyeIcon } from '@/views/components/icons/EyeIcon.tsx';
import { AccountCard } from '@/views/pages/Dashboard/components/Accounts/AccountCard.tsx';
import { SliderNavigation } from '@/views/pages/Dashboard/components/Accounts/SliderNavigation.tsx';
import { useAccountsController } from '@/views/pages/Dashboard/components/Accounts/useAccountsController.ts';
import { formatCurrency } from '@/app/utils/formatCurrency.ts';
import { cn } from '@/lib/utils.ts';
import { Spinner } from '@/views/components/Loading/Spinner';

export function Accounts() {
  const {
    sliderState,
    setSliderState,
    windowWidth,
    areValuesVisible,
    toggleValuesVisibility,
    isLoading,
  } = useAccountsController();

  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
      {isLoading && (
        <div className="flex items-center justify-center h-full w-full">
          <Spinner className="w-10 h-10 border-l-teal-950/50 border-r-teal-950/50 border-b-teal-950/50 border-t-white" />
        </div>
      )}

      {!isLoading && (
        <>
          <div>
            <span className="tracking-[-0.5px] text-white block">Saldo total</span>
            <div className="flex items-center gap-2">
              <strong
                className={cn(
                  'text-2xl tracking-[-1px] text-white',
                  !areValuesVisible && 'blur-md',
                )}
              >
                {formatCurrency(1000)}
              </strong>
              <button
                type="button"
                className="w-8 h-8 flex items-center justify-center"
                onClick={toggleValuesVisibility}
              >
                <EyeIcon open={!areValuesVisible} />
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
            <div>
              <Swiper
                spaceBetween={16}
                slidesPerView={windowWidth >= 500 ? 2.1 : 1.1}
                onSlideChange={(swiper) => {
                  setSliderState({
                    isBeginning: swiper.isBeginning,
                    isEnd: swiper.isEnd,
                  });
                }}
              >
                <div className="flex items-center justify-between mb-4" slot="container-start">
                  <strong className="text-white tracking-[-1px] text-lg font-bold">
                    Minhas contas
                  </strong>

                  <SliderNavigation
                    isBeginning={sliderState.isBeginning}
                    isEnd={sliderState.isEnd}
                  />
                </div>

                <SwiperSlide>
                  <AccountCard name="Nubank" color="#7950F2" balance={1023.0} type="CHECKING" />
                </SwiperSlide>

                <SwiperSlide>
                  <AccountCard name="Itáu" color="#228BE6" balance={5000} type="CASH" />
                </SwiperSlide>

                <SwiperSlide>
                  <AccountCard name="XP" color="#FD7E14" balance={25000} type="INVESTMENT" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
