import { FC, HTMLAttributes } from 'react';
import { LoginForm } from '../../components';

const Registration: FC<HTMLAttributes<HTMLElement>> = () => {
  return (
    <main>
      <h1>Регистрация пользователя</h1>
      <LoginForm />
    </main>
  );
};

export default Registration;
