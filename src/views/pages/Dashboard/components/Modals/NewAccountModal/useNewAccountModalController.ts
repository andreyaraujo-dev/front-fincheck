import { useDashboard } from '@/app/hooks/useDashboard.ts';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/app/hooks/useToast.ts';

const schema = z.object({
  initialBalance: z.string().nonempty('Saldo inicial é obrigatório'),
  name: z.string().nonempty('Nome é obrigatório'),
  type: z.enum(['CHECKING', 'INVESTMENT', 'CASH']),
  color: z.string().nonempty('Cor é obrigatória'),
});

type FormData = z.infer<typeof schema>;

export function useNewAccountModalController() {
  const { isNewAccountModalOpen, closeNewAccountModal } = useDashboard();
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      initialBalance: '0',
    },
  });

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },
    control,
    reset,
  } = form;
  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      console.log(data);
      toast({ title: 'Sucesso!', description: 'Conta cadastrada com sucesso!' });
      closeNewAccountModal();
      reset();
    } catch {
      toast({ title: 'Erro!', description: 'Erro ao cadastrar a conta!' });
    }
  });

  return {
    isNewAccountModalOpen,
    closeNewAccountModal,
    handleSubmit,
    control,
    register,
    errors,
    form,
  };
}
