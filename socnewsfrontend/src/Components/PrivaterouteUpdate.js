import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const PrivaterouteUpdate = ({ isLoggedIn, children }) => {
  return isLoggedIn ? (
    <>
      {children}
    </>
  ) : (
    <>
      {toast.error("login account please")}
      <Navigate to={"/login"} />
    </>
  );
};

