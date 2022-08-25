import {
  FC,
  HTMLAttributes,
  useCallback,
  useState,
  ChangeEvent,
  useEffect,
} from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'src/hooks/redux';
import { apiRegistration } from 'src/store/apiRegistration';
import { stateUser } from 'src/store/interface';
import { Btn, styleBtn, Input, styleInput, styleForm } from '../../components';
import { stateFormReg, stateFormRegError } from './interface';
import { validation } from './vlidation';

const Registration: FC<HTMLAttributes<HTMLElement>> = () => {
  const dispatch = useAppDispatch();
  const [formData, setFormData] = useState<stateFormReg>({
    login: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [formMessage, setFormMessage] = useState<stateFormRegError>({
    errorLogin: '',
    errorEmail: '',
    errorPassword: '',
    errorPasswordConfirm: '',
  });
  const onChangeHendler = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    },
    [setFormData]
  );
  useEffect(() => {
    validation(formData, setFormMessage);
  }, [formData]);

  const onSabmitHendler = useCallback(() => {
    const formDataFilter: stateUser = {
      email: formData.email,
      username: formData.login,
      first_name: formData.login,
      last_name: formData.login,
      password: formData.password,
    };
    dispatch(apiRegistration(formDataFilter));
  }, [dispatch, formData.email, formData.login, formData.password]);

  return (
    <main>
      <form className={styleForm.registration}>
        <h2 className={styleForm.title}>Регистрация</h2>
        <Input
          type="text"
          label={'Логин'}
          error={formMessage.errorLogin}
          wraperClass={styleInput.wraperRegForm}
          placeholder="Name"
          value={formData.login}
          name="login"
          onChange={onChangeHendler}
        />
        <Input
          type="email"
          label={'Email'}
          error={formMessage.errorEmail}
          wraperClass={styleInput.wraperRegForm}
          placeholder="name@domen.ru"
          value={formData.email}
          name="email"
          onChange={onChangeHendler}
        />
        <Input
          type="password"
          label={'Пароль'}
          error={formMessage.errorPassword}
          wraperClass={styleInput.wraperRegForm}
          placeholder="***"
          value={formData.password}
          name="password"
          onChange={onChangeHendler}
        />
        <Input
          type="password"
          label={'Проверка пароля'}
          error={formMessage.errorPasswordConfirm}
          wraperClass={styleInput.wraperRegForm}
          placeholder="***"
          value={formData.passwordConfirm}
          name="passwordConfirm"
          onChange={onChangeHendler}
        />
        <Btn
          disabled={false}
          className={styleBtn.sendForm}
          clickCallback={onSabmitHendler}
        >
          Зарегистрироваться
        </Btn>
        <Link className={styleForm.link} to={''}>
          Уже есть аккаунт?
        </Link>
      </form>
    </main>
  );
};

export default Registration;
