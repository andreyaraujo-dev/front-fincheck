import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { EyeIcon } from '@/views/components/icons/EyeIcon.tsx';
import { AccountCard } from '@/views/pages/Dashboard/components/AccountCard.tsx';
import { AccountsSliderNavigation } from '@/views/pages/Dashboard/components/AccountsSliderNavigation.tsx';

export function Accounts() {
  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full px-4 py-8 md:p-10 flex flex-col">
      <div>
        <span className="tracking-[-0.5px] text-white block">Saldo total</span>
        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px] text-white">R$ 1.000,00</strong>
          <button type="button" className="w-8 h-8 flex items-center justify-center">
            <EyeIcon open />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-end">
        <div>
          <Swiper spaceBetween={16} slidesPerView={2.1}>
            <div className="flex items-center justify-between mb-4" slot="container-start">
              <strong className="text-white tracking-[-1px] text-lg font-bold">
                Minhas contas
              </strong>

              <AccountsSliderNavigation />
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
    </div>
  );
}
