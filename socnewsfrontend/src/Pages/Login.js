import React, { useState } from 'react'
import { Template } from '../Components/Template'
import clgLogo from '../Assets/clgLogo.jpg'

export const Login = (props) => {
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;
  return (
  <Template
  title="Welcome Back"
  desc1="Check latest news and update...! "
  desc2="desc2"
  formtype="login"
  img={clgLogo}
  setIsLoggedIn={setIsLoggedIn}
  />
  )
}
