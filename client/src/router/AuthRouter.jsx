import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login/login.page';
import Signup from '../pages/signup/signup.page';

const AuthRouter = () => {
  return (
    <Routes>
      <Route index path="/login" element={<Login />} />
      <Route index path="/signup" element={<Signup />} />
      <Route path="*" element={<Login />} />
    </Routes>
  );
};

export default AuthRouter;
