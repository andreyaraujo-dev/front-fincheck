import { useContext } from 'react';
import { AuthContext } from '@/app/context/AuthContext.tsx';

export function useAuth() {
  return useContext(AuthContext);
}
