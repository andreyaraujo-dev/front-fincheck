import { httpClient } from '@/app/services/httpClient.ts';

export interface SigninParams {
  email: string;
  password: string;
}

export interface SigninResponse {
  accessToken: string;
}

export async function signin({ email, password }: SigninParams) {
  const { data } = await httpClient.post<SigninResponse>('/auth/signin', { email, password });
  return data;
}
