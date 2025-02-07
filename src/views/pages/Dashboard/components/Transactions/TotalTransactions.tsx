import { ArrowDown, ArrowUp } from 'lucide-react';
import { formatCurrency } from '@/app/utils/formatCurrency.ts';
import { cn } from '@/lib/utils.ts';

interface TotalTransactionsProps {
  filtersType: 'EXPENSE' | 'INCOME' | undefined;
  areValuesVisible: boolean;
  totalIncome: number;
  totalExpense: number;
}

export function TotalTransactions({
  filtersType,
  areValuesVisible,
  totalExpense,
  totalIncome,
}: TotalTransactionsProps) {
  return (
    <div className="p-2 flex items-center justify-start md:justify-end gap-2">
      {!filtersType ? (
        <div className={cn('flex items-center gap-1', !areValuesVisible && 'blur-sm select-none')}>
          <div className="w-max text-xs font-medium text-teal-900 flex gap-1">
            <ArrowUp className="h-4 w-4" />
            <span>{formatCurrency(totalIncome)}</span>
          </div>
          <div className="w-max text-xs font-medium text-red-900 flex gap-1">
            <ArrowDown className="h-4 w-4" />
            <span>{formatCurrency(totalExpense)}</span>
          </div>
        </div>
      ) : filtersType === 'EXPENSE' ? (
        <div
          className={cn(
            'w-max text-xs font-medium text-red-900 flex gap-1',
            !areValuesVisible && 'blur-sm ',
          )}
        >
          <ArrowDown className="h-4 w-4" />
          <span>{formatCurrency(totalExpense)}</span>
        </div>
      ) : (
        <div
          className={cn(
            'w-max text-xs font-medium text-teal-900 flex gap-1',
            !areValuesVisible && 'blur-sm select-none',
          )}
        >
          <ArrowUp className="h-4 w-4" />
          <span>{formatCurrency(totalIncome)}</span>
        </div>
      )}
    </div>
  );
}
