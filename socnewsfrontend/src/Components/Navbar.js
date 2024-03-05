import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.jpg';
import { toast } from 'react-toastify';

export const Navbar = ({ userToken, setUserToken, isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const logoutUser = () => {
    setIsLoggedIn(false);
    toast.success('Logged Out');
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  const profile = () => {
    setIsLoggedIn('token');
    navigate('/profile');
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto shadow bg-emerald-600">
      <div className="flex justify-between items-center mx-5 mb-4 md:mb-0">
        <Link to={'/'}>
          <img src={logo} alt="Logo" width={30} height={30} loading="lazy" />
        </Link>
        <h1 className="text-stone-100 hover:text-white flex items-center">SCHOOL OF COMPUTERS</h1>
      </div>

      <nav className="flex flex-col md:flex-row md:ml-auto j">
        <ul className="text-stone-100 flex gap-x-6 mb-4 mt-2 md:mb-0">
          <li className="hover:text-white">
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className="hover:text-white">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="hover:text-white">
            <NavLink to="/contactus">Contact us</NavLink>
          </li>
        </ul>

        <div className="flex items-center gap-x-4 mx-5">
          {!isLoggedIn && (
            <>
              <Link to={'/'}>
                <button className="bg-emerald-900 py-2 px-4 text-stone-300 hover:text-white rounded-md border border-stone-700">
                  Log in
                </button>
              </Link>
              <Link to={'/signup'}>
                <button className="bg-emerald-900 py-2 px-4 text-stone-300 hover:text-white rounded-md border border-stone-700">
                  Sign up
                </button>
              </Link>
            </>
          )}
          {isLoggedIn && (
            <>
              <button
                className="bg-emerald-900 py-2 px-4 text-stone-300 hover:text-white rounded-md border border-stone-700"
                onClick={logoutUser}
              >
                Log out
              </button>
              <button
                onClick={profile}
                className="bg-emerald-900 py-2 px-4 text-stone-300 hover:text-white rounded-md border border-stone-700"
              >
                Profile
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};
