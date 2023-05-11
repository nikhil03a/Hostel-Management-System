import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import SideBar from '../components/SideBar'
import { useNavigate } from 'react-router-dom'
const EnableRoom = () => {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isEnable,setIsEnabled] = useState(false);
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
    
    const checkIfEnabled = async () => {
        await fetch("http://localhost:8800/admin/room-enable", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            return response.json()
        }).then(data => {
            const message = data.message
            if (message == "enabled") {
                setIsEnabled(true);
            }
        })
        .catch(error => {
            window.alert(error);
            return;
        })
    }
    useEffect(() => {
        checkIfEnabled();
    }, [isEnable])
    const handleClick = async () => {
        await fetch("http://localhost:8800/admin/room-enable", {
            method: 'POST',
            body:JSON.stringify({
                value: isEnable ? 0 : 1
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => {
            return response.json()
        }).then(data => {
            const message = data.message
            if (message === 'SUCCESS') {
                setIsEnabled(!isEnable);
            }else{
                setIsEnabled(!isEnable);
            }}).catch(error => {
            window.alert(error);
            return;
        })
    }
    return (
        <div>
            <Navbar />
            <div className='flex space-x-8'>
                <div>
                    <SideBar links={[
                        { label: "Authenticate Warden", path: "/admin/approval" },
                        { label: "View Warden Details", path: "/admin/view-warden" },
                        { label: "Enable Room Allocation", path: "/admin/enable-room" }
                    ]} />
                </div>
                <div className='mt-5'>
                    {isEnable ? <div> Room allocation process is currently enabled. Click below to disable</div> :
                     <div>Room allocation process is currently disabled. Click below to enable</div>}
                    <br></br>
                    <button onClick={handleClick} className='cursor-pointer border p-2 bg-slate-100 rounded border-dashed hover:bg-slate-200'>Enable / Disable</button>
                </div>
            </div>
        </div>
    )
}

export default EnableRoom
