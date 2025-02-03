import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/views/components/ui/dialog.tsx';
import { Cross2Icon } from '@radix-ui/react-icons';

interface ModalProps {
  open: boolean;
  onClose?: () => void;
  title: string;
  children: React.ReactNode;
  rightAction?: React.ReactNode;
}

export function Modal({ open, children, onClose, title, rightAction }: ModalProps) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader className="h-12 flex flex-row items-center justify-between text-gray-800">
          <button
            type="button"
            className="w-12 h-12 flex items-center justify-center outline-none"
            onClick={onClose}
          >
            <Cross2Icon className="w-6 h-6" />
          </button>
          <DialogTitle className="text-lg tracking-[-1px] font-bold">{title}</DialogTitle>
          <div className="w-12 h-12 flex items-center justify-center">{rightAction}</div>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
}
