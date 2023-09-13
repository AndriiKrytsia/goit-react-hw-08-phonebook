import { NavAuth } from 'components/NavAuth';
import { UserMenu } from 'components/UserMenu';
import { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectLogged } from 'redux/selector';

export const Navigation = () => {
  const logged = useSelector(selectLogged);
  return (
    <>
      {logged ? <UserMenu /> : <NavAuth />}
      <Suspense fallback={<div>LOADING</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
