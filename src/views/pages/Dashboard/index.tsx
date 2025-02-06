import { Logo } from '../../components/Logo';
import { UserMenu } from '../../components/UserMenu';
import { Accounts } from './components/Accounts';
import { Fab } from './components/Fab';
import { Transactions } from './components/Transactions';
import { DashboardContext, DashboardProvider } from '@/app/context/DashboardContext.tsx';
import { NewAccountModal } from '@/views/pages/Dashboard/components/Modals/NewAccountModal';
import { NewTransactionModal } from '@/views/pages/Dashboard/components/Modals/NewTransactionModal';
import { EditAccountModal } from '@/views/pages/Dashboard/components/Modals/EditAccountModal';

export function Dashboard() {
  return (
    <DashboardProvider>
      <DashboardContext.Consumer>
        {({ accountBeingEdited }) => (
          <div className="w-full h-full p-4 lg:px-8 lg:pt-6 lg:pb-8 flex flex-col gap-4">
            <header className="h-12 flex items-center justify-between">
              <Logo className="h-6 text-teal-900" />
              <UserMenu />
            </header>

            <main className="flex-1 flex flex-col lg:flex-row gap-4 max-h-full">
              <div className="w-full lg:w-1/2">
                <Accounts />
              </div>

              <div className="w-full lg:w-1/2">
                <Transactions />
              </div>
            </main>

            <Fab />

            <NewAccountModal />
            <NewTransactionModal />
            {accountBeingEdited && <EditAccountModal />}
          </div>
        )}
      </DashboardContext.Consumer>
    </DashboardProvider>
  );
}
