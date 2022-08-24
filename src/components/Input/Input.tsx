import { FC } from 'react';
import { InputProps } from './interface';
import style from './Input.module.scss';

const Input: FC<InputProps> = ({
  label,
  error,
  required,
  wraperClass,
  labelClass,
  errorClass,
  className,
  ...props
}) => {
  if (wraperClass === style.wraperRegForm) {
    className = style.regForm;
    labelClass = style.lableRegForm;
    errorClass = style.errorRegForm;
  }
  return (
    <label className={wraperClass}>
      {!!label && <span className={labelClass}>{label}</span>}
      <input className={className} {...props}></input>
      {!!error && <span className={errorClass}>{error}</span>}
    </label>
  );
};

export default Input;
