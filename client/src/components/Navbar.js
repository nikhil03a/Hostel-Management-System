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
        <div className='bg-purple-500'>
            <div className='flex items-center justify-between px-5 py-3'>
                <div className='text-white font-extrabold text-xl'>CEG Hostels</div>
                <div className='text-black bg-white flex flex-row items-center justify-between p-2 rounded cursor-pointer hover:bg-purple-500' onClick={logout}>
                    <div className='mr-2'><BiLogOut /></div>
                    <div>Logout</div>
                </div>
            </div>
        </div>

    )
}

export default Navbar
