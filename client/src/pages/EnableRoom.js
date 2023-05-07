import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import { useNavigate } from 'react-router-dom'
const EnableRoom = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const checkUserToken = () => {
        const userToken = localStorage.getItem('user-token');
        if (userToken === 'wardenwarden') {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
            navigate('/');
        }
    }
    useEffect(() => {
        checkUserToken();
    }, [isLoggedIn])
    
    const [room,setRoom] = useState('disable')
    const content = room==="enable" ? "Process is currently enabled. Click to disable" : "Process is currently disabled. Click to enable";
    useEffect(()=>{
        localStorage.setItem('room',room)
    },[room])
    const handleClick = ()=>{
        if(room === 'enable')
           setRoom('disable')
        else    
            setRoom('enable');
    }
    return (
        <div>
            <Navbar />
            <div className='flex space-x-8'>
                <div>
                    <SideBar links={[
                        { label: "Authenticate Student", path: "/admin/approval" },
                        { label: "View Student Details", path: "/admin/view-warden" },
                        { label: "Enable Room Allocation", path: "/warden/enable-room" }
                    ]} />
                </div>
                <div>
                    {content}
                    <br></br>
                    <button onClick={handleClick}>Enable / Disable</button>
                </div>
            </div>
        </div>
    )
}

export default EnableRoom
