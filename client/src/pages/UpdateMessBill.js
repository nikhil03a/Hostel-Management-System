import Navbar from '../components/Navbar';
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../components/SideBar';
import swal from 'sweetalert'
const UpdateMessBill = () => {
    const navigate = useNavigate()
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

    const [data,setData] = useState({
        month:"",
        year:"2023",
        amount:0
    })
    const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }
    const handleSubmit = async (e)=>{
        e.preventDefault();
        await fetch("http://localhost:8800/warden/mess/" + localStorage.getItem('id'), {
            method: 'POST',
            body: JSON.stringify({
                month:data.month,
                year:data.year,
                amount:data.amount
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
                    
                    swal("Mess Bill Updated Successfully", "", "success")
                }
            })
            .catch(error => {
                window.alert(error);
                return;
            })
    }
  return (
    <div>
      <div className='relative'>
            <Navbar />
            <div className='flex space-x-10'>
                <div><SideBar links={[
                    { label: "Dashboard", path: '/warden/' + localStorage.getItem('id') },
                    { label: "Authenticate Student", path: "/warden/approval/" + localStorage.getItem('id') },
                    { label: "View Student Details", path: "/warden/view-student/" + localStorage.getItem('id') },
                    { label: "Mark Attendance", path: '/warden/attendance/' + localStorage.getItem('id') },
                    { label: "Update Mess Bill", path: '/warden/mess/' + localStorage.getItem('id') }]} />
                </div>
                <div>
                    <h3>Update Mess Bill</h3>
                    <br></br>
                    <label>Select Month: </label>
                    <select name='month' onChange={handleChange}>
                        <option value='1'>January</option>
                        <option value='2'>February</option>
                        <option value='3'>March</option>
                        <option value='4'>April</option>
                        <option value='5'>May</option>
                        <option value='6'>June</option>
                        <option value='7'>July</option>
                        <option value='8'>August</option>
                        <option value='9'>September</option>
                        <option value='10'>October</option>
                        <option value='11'>November</option>
                        <option value='12'>December</option>                        
                    </select>
                    <br></br><br></br>
                    <label>Year: </label>
                    <select name='year' onChange={handleChange}>
                        <option value='2023'>2023</option>
                    </select>
                    <br></br><br></br>
                    <label>Enter Total Bill Amount: </label>
                    <input type='number' name='amount' onChange={handleChange}></input>
                    <br></br><br></br>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateMessBill
