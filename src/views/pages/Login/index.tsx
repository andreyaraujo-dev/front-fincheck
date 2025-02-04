import { Link } from 'react-router-dom';
import { Input } from '@/views/components/ui/input.tsx';
import { Button } from '@/views/components/ui/button.tsx';
import { useLoginController } from '@/views/pages/Login/useLoginController.tsx';

export function Login() {
  const { handleSubmit, register, errors, isPending } = useLoginController();

  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <header className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold text-gray-900 tracking-[-1px]">Entre em sua conta</h1>

        <p className="space-x-2">
          <span className="text-gray-700 tracking-[-0.5px]">Novo por aqui?</span>
          <Link to="/register" className="text-teal-900 tracking-[-0.5px] font-medium">
            Crie uma conta
          </Link>
        </p>
      </header>

      <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-4">
        <Input
          type="email"
          placeholder="E-mail"
          {...register('email')}
          error={errors.email?.message}
          showErrorMessage
        />
        <Input
          type="password"
          placeholder="Senha"
          {...register('password')}
          error={errors.password?.message}
          showErrorMessage
        />

        <Button type="submit" className="rounded-[16px] mt-2" isLoading={isPending}>
          Entrar
        </Button>
      </form>
    </div>
  );
}
