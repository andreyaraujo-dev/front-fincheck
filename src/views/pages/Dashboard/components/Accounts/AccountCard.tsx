import { formatCurrency } from '@/app/utils/formatCurrency.ts';
import { BankAccountType } from '@/views/components/icons/BankAccountType';
import { cn } from '@/lib/utils.ts';
import { useDashboard } from '@/app/hooks/useDashboard.ts';
import { BankAccount } from '@/app/entities/BankAccount.ts';

interface AccountCardProps {
  data: BankAccount;
}

export function AccountCard({ data: { color, type, name, currentBalance } }: AccountCardProps) {
  const { areValuesVisible } = useDashboard();
  return (
    <div
      className="p-4 bg-white rounded-2xl h-[200px] flex flex-col justify-between border-b-4"
      style={{ borderColor: color }}
    >
      <div>
        <BankAccountType type={type} />
        <span className="text-gray-800 font-medium tracking-[-0.5px] mt-4 block">{name}</span>
      </div>

      <div>
        <span
          className={cn(
            'text-gray-800 font-medium tracking-[-0.5px] block',
            !areValuesVisible && 'blur-sm',
          )}
        >
          {formatCurrency(currentBalance)}
        </span>
        <small className="text-gray-600 text-sm">Saldo atual</small>
      </div>
    </div>
  );
}
