import { Router } from './Router';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/app/services/react-query/queryClient.ts';
import { Toaster } from '@/views/components/ui/toaster.tsx';
import { AuthProvider } from '@/app/context/AuthContext.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>

      <ReactQueryDevtools buttonPosition="bottom-left" />
    </QueryClientProvider>
  );
}
