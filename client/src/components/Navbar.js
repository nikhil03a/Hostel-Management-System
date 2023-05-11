import React from 'react'
import { BiLogOut } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem('user-token');
        navigate('/');
    }
    return (
        <div className='navbar-custom'>
            <div className='flex items-center justify-between px-5 py-3'>
                <div className='text-white font-extrabold text-xl'>CEG Hostels</div>
                <div className='text-black bg-gray-200 flex flex-row items-center font-extralight justify-between p-2 rounded cursor-pointer hover:bg-gray-300' onClick={logout}>
                    <div className='mr-2'><BiLogOut /></div>
                    <div>Logout</div>
                </div>
            </div>
        </div>

    )
}

export default Navbar
