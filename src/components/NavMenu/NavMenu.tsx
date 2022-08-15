import { FC, HTMLAttributes } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../const/Routes';

const NavMenu: FC<HTMLAttributes<HTMLDivElement>> = () => {
  return (
    <div>
      <NavLink
        to={ROUTES.MAIN}
        className={({ isActive }) => (isActive ? 'link__active' : 'link')}
      >
        Главная
      </NavLink>
      <NavLink
        to={ROUTES.REGISTRATION}
        className={({ isActive }) => (isActive ? 'link__active' : 'link')}
      >
        Регистрация
      </NavLink>
    </div>
  );
};

export default NavMenu;
