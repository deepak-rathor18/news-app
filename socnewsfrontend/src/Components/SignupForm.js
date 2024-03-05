import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { AppContext } from '../Context/AppContext';
export const SignupForm = ({ setIsLoggedIn }) => {

    const navigate = useNavigate();
    const { formData, setFormData } = useContext(AppContext);

    const [showPassword, setShowPassword] = useState(false)
    const [showConfrimPassword, setShowConfrimPassword] = useState(false)


    function changeHandler(event) {
        setFormData((preData) => ({
            ...preData,
            [event.target.name]: event.target.value

        }))
    }
    function submitHandler(event) {

        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            toast.error("Password do not match");
            return;
        }


        const accountData = {
            ...formData,
        }



        // api call

        axios.post("http://localhost:4000/addUser", formData).then((res => {
            if (res.data.status == 200) {
                toast.success("Account Created")
                toast.success("login your account")
                navigate("/")

                setFormData({

                    firstName: "",
                    lastName: "",
                    email: "",
                    password: "",
                    confirmPassword: ""
                })


            } else {
                toast.error("Something went wrong...")
            }
        })).catch((err) => {
            console.log(err);
            toast.error("Account not Created try again....")
        })




    }
    return (
        <form onSubmit={submitHandler}>
            {/* firstName and lastname */}
            <div className='flex gap-x-5 mt-[20px]'>
                <label
                    className='text-[0.875rem] text-stone-200 mb-1 leading-[1.375rem] '>First Name
                    <sup className='text-pink-600'>*</sup>
                    <input
                        required
                        type="text"
                        name='firstName'
                        onChange={changeHandler}
                        placeholder='Enter your First Name'
                        value={formData.firstName}
                        className='bg-stone-800 rounded-[0.5rem]  text-stone-200 w-full p-[12px] shadow shadow-stone-300 mt-1'
                    />
                </label>

                <label className='text-[0.875rem] text-stone-200 mb-1 leading-[1.375rem]'>Last Name
                    <sup
                        className='text-pink-600'>*</sup>
                    <input
                        required
                        type="text"
                        name='lastName'
                        onChange={changeHandler}
                        placeholder='Enter your Last Name'
                        value={formData.lastName}
                        className='bg-stone-800 rounded-[0.5rem]  text-stone-200 w-full p-[12px] shadow shadow-stone-300 mt-1'
                    />
                </label>
            </div>
            {/* email*/}
            <div className='mt-[20px]'>
                <label className='text-[0.875rem] text-stone-200 mb-1 leading-[1.375rem] w-full'> Email Address
                    <sup className='text-pink-600'>*</sup>
                    <input
                        required
                        type="email"
                        name='email'
                        onChange={changeHandler}
                        placeholder='Enter your email'
                        value={formData.email}
                        className='bg-stone-800 rounded-[0.5rem]  text-stone-200 w-full p-[12px] shadow shadow-stone-300 mt-1'
                    />
                </label >
            </div>

            {/* password and confirmpassword */}
            <div className='flex gap-x-5 mt-[20px]'>
                <label className='text-[0.875rem] text-stone-200 mb-1 leading-[1.375rem] w-full relative'>Create Password
                    <sup className='text-pink-600'>*</sup>
                    <input
                        required
                        type={showPassword ? ("text") : ("password")}
                        name='password'
                        onChange={changeHandler}
                        placeholder='Enter password'
                        value={formData.password}
                        className='bg-stone-800 rounded-[0.5rem]  text-stone-200 w-full p-[12px] shadow shadow-stone-300 mt-1'
                    />
                    <span
                        className='absolute right-3 top-[32px] cursor-pointer'
                        onClick={() => setShowPassword((prev) => !prev)}>
                        {showPassword ?

                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                            (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                    </span>
                </label>

                <label className='text-[0.875rem] text-stone-200 mb-1 leading-[1.375rem] w-full relative'>Confirm Password
                    <sup className='text-pink-600'>*</sup>
                    <input
                        required
                        type={showConfrimPassword ? ("text") : ("password")}
                        name='confirmPassword'
                        onChange={changeHandler}
                        placeholder='Enter confirm Password'
                        value={formData.confirmPassword}
                        className='bg-stone-800 rounded-[0.5rem]  text-stone-200 w-full p-[12px] shadow shadow-stone-300 mt-1'
                    />
                    <span
                        className='absolute right-3 top-[32px] cursor-pointer'
                        onClick={() => setShowConfrimPassword((prev) => !prev)}>
                        {showConfrimPassword ?
                            (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) :
                            (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                    </span>
                </label >


            </div>
            <button className='bg-yellow-400 rounded-[50px] font-medium  text-stone-800 px-[12px] py-[8px] mt-7 w-full '>Create Account</button>
        </form>
    )
}
