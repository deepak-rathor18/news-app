import React, { useState } from 'react'
import { Template } from '../Components/Template'
import singupLogo from '../Assets/singupLogo.jpg'
export const Signup = (props) => {
    let isLoggedIn=props.isLoggedIn;
    let setIsLoggedIn=props.setIsLoggedIn;

  return (
    <div>  <Template
    title="Welcome to signup page"
    desc1="Check latest news and update...! "
    desc2="desc2"
    img={singupLogo}
    formtype="signup"
    setIsLoggedIn={setIsLoggedIn}
    /></div>
  )
}
