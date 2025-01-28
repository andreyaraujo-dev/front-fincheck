import { httpClient } from '@/app/services/httpClient.ts';

export interface SignupParams {
  email: string;
  password: string;
  name: string;
}

export interface SignupResponse {
  accessToken: string;
}

export async function signup({ name, email, password }: SignupParams) {
  const { data } = await httpClient.post<SignupResponse>('/auth/signup', { name, email, password });
  return data;
}
