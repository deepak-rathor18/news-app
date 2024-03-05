import React, { useContext, useEffect, useState } from 'react'
import CreatePost from '../Components/CreatePost'
import { LatestNews } from '../Components/LatestNews'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AppContext } from '../Context/AppContext'


export const Home = () => {

  const { userLoginData, setUserLoginData } = useContext(AppContext);

  useEffect(() => {
    let user = JSON.parse(localStorage.getItem("user"))
    // console.log(user._id);
    // console.log(user);
    setUserLoginData({
      ...userLoginData, firstName: user.firstName, lastName: user.lastName, email: user.email, id: user._id
    })
  }, [])
  return (
    <div className="bg-gray-100 ">
      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Welcome to Our College News Website!
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Stay updated with the latest news and events happening in our
              college community. Students can create posts and share their
              thoughts and experiences.
            </p>
          </div>
        </div>
      </div>
      <div className='flex justify-center mt-8"'>
        <Link to="/createPost">  <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "

        >
          Create New Post
        </button></Link>

      </div>

      <div>
        <div className="max-w-md mx-auto mt-10 bg-white rounded-xl shadow-md overflow-hidden md:max-w-5xl">
          <div className='flex justify-between mt-4 mb-4'>
         <Link to="/home">
         <div className='ml-5 text-gray-700  font-bold'>
         Latest Posts
         <hr className='bg-pink-600 border-dashed '></hr>
       </div>
         </Link>
          
            <div className='mr-5'>
            <span  className='text-gray-700  font-bold'>Today : </span> {`${new Date().toDateString()}`}
            </div>
          </div>
        </div>
      </div>



      <div>
        <LatestNews />
      </div>

    </div>

  )
}
