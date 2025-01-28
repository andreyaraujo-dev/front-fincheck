import { Spinner } from '@/views/components/Loading/Spinner';
import { Logo } from '@/views/components/Logo';

export function LaunchScreen() {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-teal-900 grid place-items-center">
      <div className="flex flex-col gap-4 items-center">
        <Logo className="h-10 text-white" />
        <Spinner className="text-teal-900 fill-white" />
      </div>
    </div>
  );
}
