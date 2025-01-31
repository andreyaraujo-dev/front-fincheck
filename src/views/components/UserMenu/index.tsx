import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/views/components/ui/dropdown-menu.tsx';
import { useAuth } from '@/app/hooks/useAuth.ts';
import { ExitIcon } from '@radix-ui/react-icons';

export function UserMenu() {
  const { signout } = useAuth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-teal-50 rounded-full w-12 h-12 flex items-center justify-center border border-teal-100 outline-none">
        <span className="text-sm tracking-[-0.5px] text-teal-900 font-medium">AA</span>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuItem
          onSelect={signout}
          className="flex items-center justify-between font-medium"
        >
          Sair
          <ExitIcon className="w-4 h-4" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
