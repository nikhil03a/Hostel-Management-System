import Navbar from '../components/Navbar';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../components/SideBar';
import { FaTachometerAlt, FaSignInAlt, FaUser, FaCheckSquare, FaCalculator } from 'react-icons/fa'
import Transitions from '../components/Transitions'
import DashBoard from '../components/DashBoard'
const WardenPage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const checkUserToken = () => {
    const userToken = localStorage.getItem('user-token');
    if (userToken === 'wardenwarden') {
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
      await fetch("http://localhost:8800/warden/dashboard/" + localStorage.getItem('id'), {
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
  const headers = [
    {
        label: 'Name',
        value: (data) => data.name
    },{
      label:"Gender",
      value: (data) => data.gender
    },
    {
        label: 'E-mail',
        value: (data) => data.email
    },
    {
        label: 'Mobile',
        value: (data) => data.mobile
    },{
      label:"Blood Group",
      value: (data) => data.bloodgroup
    },{
      label:"College Name",
      value: (data) => data.clgname
    },
    {
        label: "Hostel",
        value: (data) => data.hostel
    },
    {
        label: "Department",
        value: (data) => data.dept
    }
    ,{
      label:"Degree",
      value: (data) => data.degree
    },
    {
      label:"Area of Research",
      value: (data) => data.aoresearch
    }

];
  return (
    <Transitions className='relative'>
      <Navbar />
      <div className=''>
        <div className='flex space-x-10'>
          <div><SideBar user="Warden" links={[
            { label: "Dashboard", path: '/warden/' + localStorage.getItem('id'), icon: FaTachometerAlt },
            { label: "Authenticate Student", path: "/warden/approval/" + localStorage.getItem('id'), icon: FaSignInAlt },
            { label: "View Student Details", path: "/warden/view-student/" + localStorage.getItem('id'), icon: FaUser },
            { label: "Mark Attendance", path: '/warden/attendance/' + localStorage.getItem('id'), icon: FaCheckSquare },
            { label: "Update Mess Bill", path: '/warden/mess/' + localStorage.getItem('id'), icon: FaCalculator }]} />
          </div>
          <div>
            <div className='uppercase font-mono text-3xl p-5 font-bold'>DashBoard</div>
            <div className='flex items-center justify-between'>
            <DashBoard data={data} headers={headers}/>
            <DashBoard data={data} headers={headers}/>
            </div>
            
          </div>
        </div>

      </div>
    </Transitions>
  )
}

export default WardenPage
