import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminSideBar from '../components/AdminSideBar'
const AdminPage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
    const userToken = localStorage.getItem('user-token');
    if (userToken === 'adminadmin') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      navigate('/');
    }
  }
  useEffect(() => {
    checkUserToken();
  }, [isLoggedIn])

  const logout = () => {
    localStorage.clear();
    navigate('/');
  }
  return (
    <div>
      {isLoggedIn && <>
        <div className='font-mono font-bold text-3xl'>Admin Page</div>
        <AdminSideBar />
        <button onClick={logout} className='bg-gray-200 p-3 '>Logout</button></>}
    </div>
  )
}

export default AdminPage
