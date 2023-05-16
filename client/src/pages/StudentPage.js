import Navbar from '../components/Navbar';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
import { FaTachometerAlt, FaBed, FaUserCheck, FaFileInvoice, FaMinusCircle } from 'react-icons/fa'
import DashBoard from '../components/DashBoard';
const StudentPage = () => {
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
  const [data, setData] = useState([]);
  useEffect(() => {
    const getDetails = async () => {
      await fetch("http://localhost:8800/student/dashboard/" + localStorage.getItem('id'), {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((response) => {
          return response.json()
        })
        .then(data => {
          setData(data[0]);
        })
        .catch(error => {
          window.alert(error);
          return;
        })

    };
    getDetails();
  }, [])
  console.log(data);
  const headers1 = [
    {
      label: 'Name',
      value: (data) => data.name
    }, {
      label: "Gender",
      value: (data) => data.gender
    },
    {
      label: 'E-mail',
      value: (data) => data.email
    },
    {
      label: "College Name",
      value: (data) => data.college
    },
    {
      label: "Hostel",
      value: (data) => data.hostel
    },
    , {
      label: "Degree",
      value: (data) => data.deg
    }, {
      label: 'Mobile',
      value: (data) => data.mobile
    }, {
      label: "Blood Group",
      value: (data) => data.bloodgroup
    }, {
      label: "Address",
      value: (data) => data.address
    }, {
      label: "City",
      value: (data) => data.city
    },{
      label: "Blood Group",
      value: (data) => data.bloodgroup
    },

  ];
  return (
    <div>
      <Navbar />
      <div className='flex'>
        <div><SideBar links={[
          { label: "Dashboard", path: "/student/" + localStorage.getItem("id"), icon: FaTachometerAlt },
          { label: "Room Allocation", path: "/student/room/" + localStorage.getItem("id"), icon: FaBed },
          { label: "View Attendance", path: "/student/attendance/" + localStorage.getItem('id'), icon: FaUserCheck },
          { label: "View Mess Bill", path: "/student/messbill/" + localStorage.getItem('id'), icon: FaFileInvoice },
          { label: 'Apply for Mess Reduction', path: '/student/reduction/' + localStorage.getItem('id'), icon: FaMinusCircle }]} /></div>
      <div>
        <div className='uppercase font-mono text-3xl p-5 font-bold'>DashBoard</div>
        <div className='flex flex-wrap w-full'>
          <DashBoard data={data} headers={headers1} />
        </div>
      </div>
      </div>

    </div>
  )
}

export default StudentPage
