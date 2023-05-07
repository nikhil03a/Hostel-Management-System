import Navbar from '../components/Navbar';
import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
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
    
    const logout = () => {
      localStorage.clear();
      navigate('/');
    }
    return (
      <div className='relative'>
      <Navbar />
      <div className='flex space-x-10'>
        <div><SideBar links={[
          { label: "Dashboard", path: "/student/dashboard/"+localStorage.getItem("id") },
          { label: "Room Allocation", path: "/student/room/"+localStorage.getItem("id") }]  }/></div>
      </div>
    </div>
    )
}

export default StudentPage
