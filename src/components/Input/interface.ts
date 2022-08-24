import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelClass?: string;
  error?: string;
  errorClass?: string;
  wraperClass?: string;
}
