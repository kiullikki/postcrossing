import { FC, HTMLAttributes } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Btn } from '../Btn';
import { LoginFormData } from './interface';

const LoginForm: FC<HTMLAttributes<HTMLFormElement>> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();
  const onSubmit: SubmitHandler<LoginFormData> = (data) => {
    console.log(data);
  };

  return (
    <form {...props}>
      <input
        type="login"
        placeholder="login/email"
        {...register('login', {
          pattern: /^(\S+)@([a-z0-9-]+)(\.)([a-z]{2,4})(\.?)([a-z]{0,4})+$/,
        })}
      />
      {errors.login && <span>Некорректный адрес электронной почты</span>}
      <input
        type="password"
        placeholder="password"
        {...register('password', { pattern: /^\S{6}$/ })}
      />
      {errors.password && (
        <span>Пароль не может быть короче 6-ти символов</span>
      )}
      <Btn type="submit" clickCallback={handleSubmit(onSubmit)}>
        Регистрация
      </Btn>
    </form>
  );
};

export default LoginForm;
