import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { SignupForm } from './SignupForm';
import { LoginForm } from './LoginForm';

export const Template = ({ title, desc1, desc2, formtype, img, setIsLoggedIn }) => {
    return (
        <div className='max-w-full max-h-full bg-stone-900'>
            <div className='flex flex-col-reverse  md:flex-row justify-evenly max-w-[1160px] py-12 mx-auto gap-x-12 gap-y-0 w-screen h-screen'>
                <div className='lg:w-full sm:w-1/2 max-w-[450px] mx-0'>
                    <h1 className='text-stone-50 font-semibold text-[1.875rem] leading-[2.375 rem]'>{title}</h1>
                    <p className='text-[1.125rem] leading-[1.625rem] mt-4'>
                        <span className='text-stone-100'>{desc1}</span>
                        <br />
                        <span className='text-blue-400 italic'>{desc2}</span>
                    </p>
                    {formtype === "signup" ?
                        (<SignupForm setIsLoggedIn={setIsLoggedIn} />) : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)}

                    <div className="flex items-center mt-5">
                        <div className="flex-1 border-t-2 border-stone-600"></div>
                        <span className="px-3 text-stone-600 ">OR</span>
                        <div className="flex-1 border-t-2 border-stone-600"></div>
                    </div>

                    <button className='w-full flex justify-center items-center font-medium gap-x-2 mt-6 bg-stone-800  py-[8px] px-[12px] text-stone-300 hover:text-white rounded-[8px] border border-stone-700'>
                        <FcGoogle />
                        <p>Sign Up with Google</p>
                    </button>

                </div>

                <div className='w-full hidden lg:flex items-center justify-center'>
                <img src={img} alt="Logo" className="w-full md:max-w-[558px] max-h-[504px] md:max-h-[400px]" loading='lazy' />
            </div>
            
            </div>
        </div>
    );
};
