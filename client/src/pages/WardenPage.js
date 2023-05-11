import Navbar from '../components/Navbar';
import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../components/SideBar';
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
    return (
      <div className='relative'>
      <Navbar />
      <div className='flex space-x-10'>
        <div><SideBar links={[
          {label:"Dashboard", path:'/warden/'+localStorage.getItem('id')},
          { label: "Authenticate Student", path: "/warden/approval/"+localStorage.getItem('id') },
          { label: "View Student Details", path: "/warden/view-student/"+localStorage.getItem('id') }]  }/></div>
        
      </div>
    </div>
    )
}

export default WardenPage
