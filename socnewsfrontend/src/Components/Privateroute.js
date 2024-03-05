import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const Privateroute = ({isLoggedIn,children}) => {


  return (
    isLoggedIn ? children : <Navigate to={"/login"} />
    
  )
}
