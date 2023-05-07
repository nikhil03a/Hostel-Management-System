import Navbar from '../components/Navbar';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
const StudentRoom = () => {
    const[isAlloted,setIsAlloted] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.hostel == "") {
            setError("Please select Hostel");
            return;    
        }
        else if (data.room == "") {
            setError("Please select Room No.");
            return;
        }
        else setError("")
        await fetch("http://localhost:8800/student/room/"+localStorage.getItem("id"), {
            method: 'POST',
            body: JSON.stringify({
                hostel: data.hostel,
                room: data.room
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                return response.json()
            })
            .then(data => {
                const message = data.message
                if (message === 'SUCCESS') {
                    setIsAlloted(true);
                }else{
                    setError("Room not Available")
                    return;
                  }
            })
            .catch(error => {
                window.alert(error);
                return;
            })
    }
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
    const [data, setData] = useState({
        hostel: "",
        room: 0
    })
    const [error, setError] = useState('');
    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
        console.log(data);
    }
    var content;
    if(isAlloted){
        content="Room has been alloted Successfully";
    }else{
        content = <div>
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Select Hostel and Room
                </h2>
                <form className='mt-6'>
                    <div className='mb-2'>
                        <label className='block text-sm font-semibold text-gray-800'>Hostel</label>
                        <select name="hostel" value={data.hostel} onChange={handleChange} className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40' required>
                            <option value={null} selected>Select Hostel</option>
                            <option value='kurinji'>Kurinji</option>
                        </select>
                    </div>
                    <div>
                        <label className='block text-sm font-semibold text-gray-800'>Room No. </label>
                        <select name="room" value={data.room} onChange={handleChange} className='block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40' required >
                            <option value={null} selected>Select Room</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>
                    </div>
                    {error &&
                        <div className='text-red-500 font-serif'>
                            {error}
                        </div>}
                    <div className='mt-6'>
                        <input type="submit" value="Submit" onClick={handleSubmit} className='w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600'></input>
                    </div>
                </form>
            </div>
        </div>
    </div>
    }
    return (
        <div className='relative'>
            <Navbar />
            <div className='flex space-x-10'>
                <div>
                    <SideBar links={[
                        { label: "Dashboard", path: "/student/dashboard/" + localStorage.getItem("id") },
                        { label: "Room Allocation", path: "/student/room/" + localStorage.getItem("id") }]} />
                </div>
                <div>
                    {content}
                </div>
            </div>
        </div>
    )
}

export default StudentRoom

