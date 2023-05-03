import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
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
    
    const logout = () => {
      localStorage.clear();
      navigate('/');
    }
    return (
      <div>
        { isLoggedIn && <><h1>Warden Page</h1>
        <button onClick={logout}>Logout</button></>}
      </div>
    )
}

export default WardenPage
