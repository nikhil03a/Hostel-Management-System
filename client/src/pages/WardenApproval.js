import Navbar from '../components/Navbar';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../components/SideBar';
import ApprovalComponent from '../components/ApprovalComponent';
const WardenApproval = () => {
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
    const [details, setDetails] = useState([])
    useEffect(() => {
        const getDetails = async () => {
            await fetch("http://localhost:8800/warden/approval/"+localStorage.getItem('id'), {
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
    var renderedItems;
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
                <div><SideBar links={[
                    { label: "Dashboard", path: '/warden/'+localStorage.getItem('id') },
                    { label: "Authenticate Student", path: "/warden/approval/"+localStorage.getItem('id') },
                    { label: "View Student Details", path: "/warden/view-student/"+localStorage.getItem('id') }]} />
                </div>
                <div>
                    {renderedItems}
                </div>
            </div>
        </div>
    )
}

export default WardenApproval

