import { Clothes } from '@/views/components/icons/Categories/Expense/Clothes';
import { Education } from '@/views/components/icons/Categories/Expense/Education';
import { Expense } from '@/views/components/icons/Categories/Expense/Expense';
import { Food } from '@/views/components/icons/Categories/Expense/Food';
import { Fun } from '@/views/components/icons/Categories/Expense/Fun';
import { Grocery } from '@/views/components/icons/Categories/Expense/Grocery';
import { Home } from '@/views/components/icons/Categories/Expense/Home';
import { Transport } from '@/views/components/icons/Categories/Expense/Transport';
import { Travel } from '@/views/components/icons/Categories/Expense/Travel';
import { Income } from '@/views/components/icons/Categories/Income/Income';

export const iconsMap = {
  INCOME: {
    default: Income,
  },
  EXPENSE: {
    default: Expense,
    food: Food,
    fun: Fun,
    grocery: Grocery,
    home: Home,
    education: Education,
    clothes: Clothes,
    transport: Transport,
    travel: Travel,
  },
};
