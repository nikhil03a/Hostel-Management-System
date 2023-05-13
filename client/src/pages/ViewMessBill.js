import Navbar from '../components/Navbar';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
import swal from 'sweetalert';
const ViewMessBill = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
      const userToken = localStorage.getItem('user-token');
      if (userToken === 'studentstudent') {
        setIsLoggedIn(true);
      }
      else {
        setIsLoggedIn(false);
        navigate('/');
      }
    }
    useEffect(() => {
      checkUserToken();
    }, [isLoggedIn])
    
    return (
      <div className='relative'>
      <Navbar />
      <div className='flex space-x-10'>
        <div><SideBar links={[
          { label: "Dashboard", path: "/student/"+localStorage.getItem("id") },
          { label: "Room Allocation", path: "/student/room/"+localStorage.getItem("id") },
          {label:"View Attendance",path:"/student/attendance/"+localStorage.getItem('id')},
          {label:"View Mess Bill", path:"/student/messbill/"+localStorage.getItem('id')},
          {label:'Apply for Mess Reduction',path:'/student/reduction/'+localStorage.getItem('id')}]  }/></div>
      </div>
    </div>
    )
}

export default ViewMessBill
