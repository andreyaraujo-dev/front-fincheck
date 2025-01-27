import { Link } from 'react-router-dom';
import { Input } from '@/views/components/ui/input.tsx';
import { Button } from '@/views/components/ui/button.tsx';

export function Register() {
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

      <form action="" className="w-full flex flex-col items-center gap-4">
        <Input type="text" name="name" placeholder="Nome" />
        <Input type="email" name="email" placeholder="E-mail" />
        <Input type="password" name="password" placeholder="Senha" />

        <Button type="submit" className="rounded-[16px] mt-2">
          Criar conta
        </Button>
      </form>
    </div>
  );
}
