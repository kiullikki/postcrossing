import { FC, HTMLAttributes } from 'react';
import { Btn } from '../Btn';

const LoginForm: FC<HTMLAttributes<HTMLFormElement>> = (props) => {
  return (
    <form {...props}>
      <>
        <input type="text" placeholder="email"></input>
        <input type="text" placeholder="password"></input>
        <Btn>Регистрация</Btn>
      </>
    </form>
  );
};

export default LoginForm;
