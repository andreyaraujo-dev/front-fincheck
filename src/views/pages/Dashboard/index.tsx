import { Button } from '@/views/components/ui/button.tsx';
import { useAuth } from '@/app/hooks/useAuth.ts';

export function Dashboard() {
  const { signout } = useAuth();
  return (
    <>
      <h1>Dashboard</h1>
      <Button onClick={signout}>Sair</Button>
    </>
  );
}
