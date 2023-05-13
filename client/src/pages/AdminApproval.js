import React, { useEffect, useState } from 'react'
import AdminSideBar from "../components/SideBar"
import { useNavigate } from 'react-router-dom'
import ApprovalComponent from '../components/ApprovalComponent'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'

const AdminApproval = () => {
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

  const [details, setDetails] = useState([])

  useEffect(() => {
    const getDetails = async () => {
      await fetch("http://localhost:8800/admin/approval", {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      })
      .then((response) => {
        return response.json()
      })
      .then(data => {
        setDetails(data);
      })
      .catch(error => {
        window.alert(error);
        return;
      })
    }
    getDetails();
  }, [])

  let renderedItems;

  if (details.message !== "Nothing") {
    renderedItems = details.map((detail) => {
      return <ApprovalComponent detail={detail} />
    })
  } else {
    renderedItems = (<div className='flex-1 mt-4'>Nothing to Approve....</div>)
  }

  return (
    <div className='relative'>
      <Navbar />
      <div className='flex space-x-10'>
        <div>
          <SideBar user="Admin" links={[
            { label: "DashBoard", path: '/admin' },
            { label: "Authenticate Warden", path: "/admin/approval" },
            { label: "View Warden Details", path: "/admin/view-warden" },
            { label: "Enable Room Allocation", path: "/admin/enable-room" },
            { label: "View Student Details", path: '/admin/view-student' }
          ]} /></div>
          <div>{renderedItems}</div>
          
        
      </div>
    </div>
  )
}

export default AdminApproval
