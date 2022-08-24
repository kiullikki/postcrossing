import { FC, HTMLAttributes } from 'react';

const Form: FC<HTMLAttributes<HTMLFormElement>> = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};

export default Form;
