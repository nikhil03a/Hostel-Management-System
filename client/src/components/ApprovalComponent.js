import React, { useState } from 'react'
import swal from 'sweetalert'
const ApprovalComponent = ({ detail }) => {
    const [isApproved, setIsApproved] = useState(false);
    const user = localStorage.getItem('user-token')
    const approveWarden = async () => {
        swal("Authenticated Successfully","","success");
        setIsApproved(true);
        await fetch("http://localhost:8800/admin/approval", {
            method: 'POST',
            body: JSON.stringify({
                id: detail.id,
                uname: detail.email,
                pwd: detail.password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                
                return response.json()
            })
            .catch(error => {
                window.alert(error);
                return;
            })
    }
    const approveStudent = async () => {
        swal("Authenticated Successfully","","success");
        setIsApproved(true);
        await fetch("http://localhost:8800/warden/approval/"+localStorage.getItem('id'), {
            method: 'POST',
            body: JSON.stringify({
                id: detail.id,
                uname: detail.email,
                pwd: detail.password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                return response.json()
            })
            .catch(error => {
                window.alert(error);
                return;
            })
    }
    const denyWarden = async ()=>{
        swal("Request Denied","","warning")
        setIsApproved(true);
        await fetch("http://localhost:8800/admin/deny", {
            method: 'POST',
            body: JSON.stringify({
                id: detail.id,
                uname: detail.email,
                pwd: detail.password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                
                return response.json()
            })
            .catch(error => {
                window.alert(error);
                return;
            })
            
    }
    const denyStudent = async()=>{
        swal("Request Denied","","warning")
        setIsApproved(true);
        await fetch("http://localhost:8800/warden/deny", {
            method: 'POST',
            body: JSON.stringify({
                id: detail.id,
                uname: detail.email,
                pwd: detail.password
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                
                return response.json()
            })
            .catch(error => {
                window.alert(error);
                return;
            })
            

    }
    const content = isApproved ? <div></div> :
        <div className='bg-orange-100 p-5 w-500 rounded-md font-sans'>
            <div className='flex space-x-20'><p>Name : </p><p>{detail.name}<br></br></p></div>
            <div className='flex space-x-20'><p>Gender : </p><p>{detail.gender}<br></br></p></div>
            <div className='flex space-x-20'><p>Address : </p><p>{detail.address}<br></br></p></div>
            <div className='flex space-x-8'><p>Mobile : </p><p>{detail.mobile}<br></br></p></div>
            <div className='flex space-x-8'><p>E-mail : </p><p>{detail.email}<br></br></p></div>
            <div className='flex space-x-8'><p>Department : </p><p>{detail.dept}<br></br></p></div>
            <div className='flex space-x-8'><p>Hostel Block : </p><p>{detail.hostel}<br></br></p></div>
            <button onClick={user==='adminadmin' ? approveWarden : approveStudent} >Approve</button>
            <button onClick={user==='adminadmin' ? denyWarden : denyStudent} >Deny Request</button>
        </div>;

    return (
        <div>
            {content}
        </div>

    )
}

export default ApprovalComponent
