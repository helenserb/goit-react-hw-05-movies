import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layuot.module.css';

export const Layout = () => {
  return (
    <div>
      <ul className={css.LayoutUl}>
        <li className={css.LayoutIl}>
          <NavLink className={css.LayoutIl} to="/">
            Home
          </NavLink>
        </li>
        <li className={css.LayoutIl}>
          <NavLink className={css.LayoutIl} to="/movies">
            Movies
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};
