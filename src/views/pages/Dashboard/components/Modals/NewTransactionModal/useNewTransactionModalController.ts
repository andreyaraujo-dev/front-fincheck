import { useDashboard } from '@/app/hooks/useDashboard.ts';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/app/hooks/useToast.ts';
import { useEffect } from 'react';

const schema = z.object({
  value: z.union([z.string().nonempty('Informe o valor'), z.number()]).transform((val, ctx) => {
    if (val === 0 || val === '0' || val === '0,00') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'A transação precisa ter um valor',
      });
      return z.NEVER;
    }

    return val;
  }),
  name: z.string().nonempty('Informe o nome'),
  categoryId: z.string().nonempty('Informe a categoria'),
  bankAccountId: z.string().nonempty('Informe a conta'),
  date: z.date(),
});

type FormData = z.infer<typeof schema>;

export function useNewTransactionModalController() {
  const { isNewTransactionModalOpen, closeNewTransactionModal, newTransactionType } =
    useDashboard();
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      value: '0',
      date: new Date(),
    },
  });

  const { handleSubmit: hookFormSubmit } = form;

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      console.log(data);
      toast({
        title: 'Sucesso!',
        description:
          newTransactionType === 'EXPENSE'
            ? 'Despesa cadastrada com sucesso!'
            : 'Receita cadastrada com sucesso!',
        duration: 3000,
      });
      closeNewTransactionModal();
      form.reset();
    } catch {
      toast({
        title: 'Erro!',
        description:
          newTransactionType === 'EXPENSE'
            ? 'Erro ao cadastrar despesa!'
            : 'Erro ao cadastrar receita!',
        duration: 3000,
      });
    }
  });

  useEffect(() => {
    form.reset();
  }, [isNewTransactionModalOpen]);

  return {
    isNewTransactionModalOpen,
    closeNewTransactionModal,
    newTransactionType,
    form,
    handleSubmit,
  };
}
