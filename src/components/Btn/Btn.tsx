import { FC, ButtonHTMLAttributes } from 'react';

const Btn: FC<
  ButtonHTMLAttributes<HTMLButtonElement> & { clickCallback?: () => void }
> = ({ children, clickCallback, ...props }) => {
  const click = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    clickCallback?.();
  };

  return (
    <button onClick={click} {...props}>
      {children}
    </button>
  );
};

export default Btn;
