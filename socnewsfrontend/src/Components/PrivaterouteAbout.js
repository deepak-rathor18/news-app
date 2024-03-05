import React from 'react';
import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export const PrivaterouteAbout = ({ isLoggedIn, children }) => {
  return isLoggedIn ? (
    <>
      {children}
    </>
  ) : (
    <>
      {toast.error("Create account please")}
      <Navigate to={"/login"} />
    </>
  );
};

