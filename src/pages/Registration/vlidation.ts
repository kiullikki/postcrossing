import { stateFormReg, stateFormRegError } from './interface';

export const validation = (
  formData: stateFormReg,
  setFormMessage: React.Dispatch<React.SetStateAction<stateFormRegError>>
) => {
  const errorMessage = {
    loginSimbol: 'Лоигн не может содержать символ @, пробел, число',
    loginLength: 'Логин не может быть короче трех символов',
    loginTaken: 'Пользователь с таким логином уже существует',
    email: 'Некорректный адрес электронной почты',
    emailTaken: 'Пользователь с таким email уже существует',
    password: 'Пароль не может быть короче шести символов',
    passwordSimbol: 'Нельзя использовать пробелы',
    passwordConfirm: 'Пароли не совпадают',
    required: 'Обязательное поле',
  };
  if (!formData.login) {
    setFormMessage((prevState) => ({
      ...prevState,
      errorLogin: errorMessage.required,
    }));
  } else if (/^.*[\d\s@].*$/.test(formData.login)) {
    setFormMessage((prevState) => ({
      ...prevState,
      requiredLogin: false,
      errorLogin: errorMessage.loginSimbol,
    }));
  } else if (!/^.{3,}$/.test(formData.login)) {
    setFormMessage((prevState) => ({
      ...prevState,
      requiredLogin: false,
      errorLogin: errorMessage.loginLength,
    }));
  } else {
    setFormMessage((prevState) => ({
      ...prevState,
      requiredLogin: false,
      errorLogin: '',
    }));
  }

  if (!formData.email) {
    setFormMessage((prevState) => ({
      ...prevState,
      errorEmail: errorMessage.required,
    }));
  } else if (
    !/^(\S+)@([a-z0-9-]+)(\.)([a-z]{2,4})(\.?)([a-z]{0,4})+$/.test(
      formData.email
    )
  ) {
    setFormMessage((prevState) => ({
      ...prevState,
      errorEmail: errorMessage.email,
    }));
  } else {
    setFormMessage((prevState) => ({
      ...prevState,
      errorEmail: '',
    }));
  }

  if (!formData.password) {
    setFormMessage((prevState) => ({
      ...prevState,
      errorPassword: errorMessage.required,
    }));
  } else if (/^.*[\s].*$/.test(formData.password)) {
    setFormMessage((prevState) => ({
      ...prevState,
      errorPassword: errorMessage.passwordSimbol,
    }));
  } else if (!/^.{6,}$/.test(formData.password)) {
    setFormMessage((prevState) => ({
      ...prevState,
      errorPassword: errorMessage.password,
    }));
  } else {
    setFormMessage((prevState) => ({
      ...prevState,
      errorPassword: '',
    }));
  }

  if (!formData.passwordConfirm) {
    setFormMessage((prevState) => ({
      ...prevState,
      errorPasswordConfirm: errorMessage.required,
    }));
  } else if (formData.passwordConfirm !== formData.password) {
    setFormMessage((prevState) => ({
      ...prevState,
      errorPasswordConfirm: errorMessage.passwordConfirm,
    }));
  } else {
    setFormMessage((prevState) => ({
      ...prevState,
      errorPasswordConfirm: '',
    }));
  }
};
