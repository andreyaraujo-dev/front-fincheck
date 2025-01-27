import { httpClient } from '@/app/services/httpClient.ts';

interface SignupParams {
  email: string;
  password: string;
  name: string;
}

export async function signup({ name, email, password }: SignupParams) {
  const { data } = await httpClient.post('/auth/signup', { name, email, password });
  return data;
}
