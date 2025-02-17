import { BankAccount } from '@/app/entities/BankAccount.ts';
import { httpClient } from '@/app/services/httpClient.ts';

type BankAccountResponse = Array<BankAccount>;

export async function getAll() {
  const { data } = await httpClient.get<BankAccountResponse>('/bank-accounts');
  return data;
}
