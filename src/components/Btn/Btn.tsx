import { FC, ButtonHTMLAttributes } from 'react';
import style from './Btn.module.scss';

const Btn: FC<
  ButtonHTMLAttributes<HTMLButtonElement> & { clickCallback?: () => void }
> = ({ children, clickCallback, className, ...props }) => {
  const click = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    clickCallback?.();
  };
  const classes = style.resetDefault + ' ' + className;
  return (
    <button className={classes} onClick={click} {...props}>
      {children}
    </button>
  );
};

export default Btn;
