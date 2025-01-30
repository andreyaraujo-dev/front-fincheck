import { iconsMap } from './iconsMap';

interface BankAccountTypeProps {
  type: keyof typeof iconsMap;
}

export function BankAccountType({ type }: BankAccountTypeProps) {
  const Icon = iconsMap[type];

  return <Icon />;
}
