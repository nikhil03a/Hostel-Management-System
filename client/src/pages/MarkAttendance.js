import Navbar from '../components/Navbar';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../components/SideBar';
import swal from 'sweetalert'
const MarkAttendance = () => {
    const navigate = useNavigate();
    const [rendered, setRendered] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [arr, setArr] = useState([]);
    const [date, setDate] = useState('')
    const [students, setStudents] = useState(false);
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


    const handleChange = (id, value) => {
        setArr(prevArr => prevArr.map(student => {
            if (student.id === id) {
                return {
                    ...student,
                    attendance: value
                }
            } else {
                return student
            }
        }))
    }
    const submitAttendance = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:8800/warden/attendance/" + localStorage.getItem('id'), {
            method: 'POST',
            body: JSON.stringify({
                date: date,
                arr: arr
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => {

                return response.json()
            })
            .then(data => {
                if (data.message === 'SUCCESS') {
                    setStudents(false);
                    swal("Attendance Marked Successfully", "", "success")
                }
            })
            .catch(error => {
                window.alert(error);
                return;
            })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:8800/warden/students/" + localStorage.getItem('id'), {
            method: 'POST',
            body: JSON.stringify({
                date: date
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                return response.json()
            })
            .then(data => {
                if (data.message === 'AE') {
                    swal("Error", "Attendance already taken", "error");
                } else {
                    const studentDetails = data;
                    setArr([...studentDetails]);
                    const temp = studentDetails.map((student) => {
                        return (<div className='flex'>
                            <div className='p-5'>{student.name}</div>
                            <div className='p-5'>{student.hostel}</div>
                            <div className='p-5'>{student.room}</div>
                            <input type="checkbox" onChange={(e) => handleChange(student.id, e.target.checked)}></input>
                        </div>
                        )
                    })
                    setRendered(temp);
                    setStudents(true);
                }
            })
            .catch(error => {
                window.alert(error);
                return;
            })
    }
    return (
        <div className='relative'>
            <Navbar />
            <div className='flex space-x-10'>
                <div><SideBar links={[
                    { label: "Dashboard", path: '/warden/' + localStorage.getItem('id') },
                    { label: "Authenticate Student", path: "/warden/approval/" + localStorage.getItem('id') },
                    { label: "View Student Details", path: "/warden/view-student/" + localStorage.getItem('id') },
                    { label: "Mark Attendance", path: '/warden/attendance/' + localStorage.getItem('id') },
                    { label: "Update Mess Bill", path: '/warden/mess/' + localStorage.getItem('id') }]} /></div>
                <div>
                    <h3>Attendance</h3><br></br>
                    <div className="">
                        <div className="relative w-full mb-3">
                            <label
                                className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                                htmlfor="grid-password"
                            >
                                Date
                            </label>
                            <input
                                type="date"
                                name='date'
                                value={date}
                                required
                                onChange={(e) => { setDate(e.target.value); console.log(date) }}
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                            <button onClick={handleSubmit}>Submit</button>
                        </div>
                        <div>
                            {students && <div>
                                {rendered}
                                <button onClick={submitAttendance}>Mark Attendance
                                </button>
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MarkAttendance
