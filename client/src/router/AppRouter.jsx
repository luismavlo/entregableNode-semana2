import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React, { useEffect } from 'react';
import PublicRouter from './PublicRouter';
import AuthRouter from './AuthRouter';
import PrivateRouter from './PrivateRouter';
import DashboardRouter from './DashboardRouter';
import Header from '../components/ui/header/header.component';
import { useDispatch, useSelector } from 'react-redux';
import { usersActions } from '../store/slices/user.slice';

const AppRouter = () => {
  let uid = localStorage.getItem('uid');
  const { isAuth } = useSelector(state => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(usersActions.login(uid));
  }, [uid, dispatch, isAuth]);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRouter isAuthenticated={!!uid}>
              <AuthRouter />
            </PublicRouter>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRouter isAuthenticated={!!uid}>
              <DashboardRouter />
            </PrivateRouter>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
