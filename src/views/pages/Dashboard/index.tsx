import { Logo } from '@/views/components/Logo';
import { UserMenu } from '@/views/components/UserMenu';
import { Accounts } from '@/views/pages/Dashboard/components/Accounts';
import { Transactions } from '@/views/pages/Dashboard/components/Transactions';
import { DashboardProvider } from '@/app/context/useDashboardContext.tsx';
import { Fab } from '@/views/pages/Dashboard/components/Fab';
import { NewAccountModal } from '@/views/pages/Dashboard/components/Modals/NewAccountModal';

export function Dashboard() {
  return (
    <DashboardProvider>
      <div className="h-full w-full p-4 md:px-8 md:pb-8 md:pt-6 flex flex-col gap-4">
        <header className="w-full h-12 flex items-center justify-between">
          <Logo className="h-6 text-teal-900" />
          <UserMenu />
        </header>

        <main className="flex-1 flex flex-col md:flex-row gap-4 max-h-full">
          <div className="w-full md:w-1/2">
            <Accounts />
          </div>
          <div className="w-full md:w-1/2">
            <Transactions />
          </div>
        </main>

        <Fab />

        <NewAccountModal />
      </div>
    </DashboardProvider>
  );
}
