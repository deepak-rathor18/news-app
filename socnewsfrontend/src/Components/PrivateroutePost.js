import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const PrivateroutePost = ({ isLoggedIn, children }) => {
  return isLoggedIn ? (
    <>
      {children}
    </>
  ) : (
    <>
      {toast.error("Login account please")}
      <Navigate to={"/login"} />
    </>
  );
};

