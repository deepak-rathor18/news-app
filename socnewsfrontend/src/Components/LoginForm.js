import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineEyeInvisible ,AiOutlineEye  } from "react-icons/ai";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppContext } from '../Context/AppContext';

export const LoginForm = ({setIsLoggedIn}) => {
    const navigate=useNavigate();
    const {fromDataLogin,setFromDataLogin}=useContext(AppContext);
    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setFromDataLogin((preData) => ({
            ...preData,
            [event.target.name]: event.target.value
        }));
    }

    function submitHandler(event){
         event.preventDefault();
        
         axios.post("http://localhost:4000/login",fromDataLogin).then((res)=>{
            console.log(res.data);
            if(res.data.status == 200){
            
                toast.success("Logged In");
                localStorage.setItem("token",res.data.token);
                localStorage.setItem("user",JSON.stringify(res.data.user));

                navigate("/home");
                setIsLoggedIn(true);
                setFromDataLogin({
                    email  :"",
                    password:""
                });
            } else {
                toast.error("Email and password incorrect...");
            }
         }).catch((err)=>{
            toast.error(err.message || "An error occurred");
         });
    }

    return (
        <form onSubmit={submitHandler} className='flex flex-col w-full  mt-6 gap-y-4'>
            <label className='w-full'>
                <p className='text-[0.875rem] text-stone-200 mb-1 leading-[1.375rem]'>
                    Email Address <sup className='text-pink-600'>*</sup>
                </p>
                <input
                    required
                    type="email"
                    value={fromDataLogin.email}
                    onChange={changeHandler}
                    placeholder='Enter email address'
                    name='email'
                    className='bg-stone-800 rounded-[0.5rem]  text-stone-200 w-full p-[12px] shadow shadow-stone-300'
                />
            </label>

            <label className='w-full relative'>
                <p className='text-[0.875rem] text-stone-200 mb-1 leading-[1.375rem]'>
                    Password <sup className='text-pink-600'>*</sup>
                </p>
                <input
                    required
                    type={showPassword ? ("text") :("password")}
                    value={fromDataLogin.password}
                    onChange={changeHandler}
                    placeholder='Enter Password'
                    name='password'
                    className='bg-stone-800 rounded-[0.5rem]  text-stone-200 w-full p-[12px] shadow shadow-stone-300'
                />
                <span 
                    className='absolute right-3 top-[38px] cursor-pointer'
                    onClick={()=>setShowPassword((prev)=>!prev)}
                >
                    {showPassword? (<AiOutlineEyeInvisible  fontSize={24} fill='#AFB2BF' />):(<AiOutlineEye  fontSize={24} fill='#AFB2BF'/>)}
                </span>
            </label>
            <Link to="#">
                <p className='text-xs  text-blue-500 max-w-max ml-auto '>Forget Password</p>
            </Link>
          
            <button className='bg-yellow-400 rounded-[50px] font-medium  text-stone-800 px-[12px] py-[8px] mt-3'>
                Sign in
            </button>
        </form>
    )
}
