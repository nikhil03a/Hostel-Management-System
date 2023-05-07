import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
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


  return (
    <div>
      <Navbar />
      <div>
        <SideBar links={[
          { label: "Authenticate Warden", path: "/admin/approval" },
          { label: "View Warden Details", path: "/admin/view-warden" }
        ]}/>
      </div>
    </div>
  )
}

export default AdminPage
