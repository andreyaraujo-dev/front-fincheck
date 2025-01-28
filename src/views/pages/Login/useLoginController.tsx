import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { authService } from '@/app/services/authService';
import { useToast } from '@/hooks/use-toast.ts';
import { SigninParams } from '@/app/services/authService/signin.ts';

const schema = z.object({
  email: z.string().nonempty('E-mail é obrigatório').email('Informe um e-mail válido'),
  password: z
    .string()
    .nonempty('Senha é obrigatória')
    .min(8, 'Senha deve conter pelo menos 8 dígitos'),
});

type FormData = z.infer<typeof schema>;

export function useLoginController() {
  const {
    handleSubmit: hookFormSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async (data: SigninParams) => {
      return authService.signin(data);
    },
    mutationKey: ['signin'],
  });

  const { toast } = useToast();

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      await mutateAsync(data);
    } catch (error) {
      toast({ title: 'Erro', description: 'Credenciais inválidas, tente novamente.' });
      console.error(error);
    }
  });

  return { handleSubmit, register, errors, isPending };
}
