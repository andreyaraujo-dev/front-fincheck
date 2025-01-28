import { Router } from './Router';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/app/services/react-query/queryClient.ts';
import { Toaster } from '@/views/components/ui/toaster.tsx';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}
