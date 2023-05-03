import React,{useEffect,useState} from 'react'
import { useNavigate } from 'react-router-dom';
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
      <div>
        { isLoggedIn && <><h1>Student Page</h1>
        <button onClick={logout}>Logout</button></>}
      </div>
    )
}

export default StudentPage
