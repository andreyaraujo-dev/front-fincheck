import { Link } from 'react-router-dom';
import { Input } from '@/views/components/ui/input.tsx';
import { Button } from '@/views/components/ui/button.tsx';
import { useRegisterController } from '@/views/pages/Register/useRegisterController.tsx';

export function Register() {
  const { register, handleSubmit, errors, isPending } = useRegisterController();

  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <header className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">Crie sua conta</h1>

        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">Já possui uma conta?</span>
          <Link to="/login" className="text-teal-900 tracking-[-0.5px] font-medium">
            Fazer login
          </Link>
        </p>
      </header>

      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
        <Input type="text" placeholder="Nome" {...register('name')} error={errors.name?.message} />
        <Input
          type="email"
          placeholder="E-mail"
          {...register('email')}
          error={errors.email?.message}
        />
        <Input
          type="password"
          placeholder="Senha"
          {...register('password')}
          error={errors.password?.message}
        />

        <Button type="submit" className="rounded-[16px] mt-2" isLoading={isPending}>
          Criar conta
        </Button>
      </form>
    </div>
  );
}
