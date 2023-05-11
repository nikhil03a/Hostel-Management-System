import React, { useState } from 'react'
const ApprovalComponent = ({ detail }) => {
    const [isApproved, setIsApproved] = useState(false);
    const user = localStorage.getItem('user-token')
    const approveWarden = async () => {
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
    const content = isApproved ? <div>Approved</div> :
        <div className='bg-orange-100 p-5 w-500 rounded-md font-sans'>
            <div className='flex space-x-20'><p>Name : </p><p>{detail.name}<br></br></p></div>
            <div className='flex space-x-20'><p>Gender : </p><p>{detail.gender}<br></br></p></div>
            <div className='flex space-x-20'><p>Address : </p><p>{detail.address}<br></br></p></div>
            <div className='flex space-x-8'><p>Mobile : </p><p>{detail.mobile}<br></br></p></div>
            <div className='flex space-x-8'><p>E-mail : </p><p>{detail.email}<br></br></p></div>
            <div className='flex space-x-8'><p>Department : </p><p>{detail.dept}<br></br></p></div>
            <div className='flex space-x-8'><p>Hostel Block : </p><p>{detail.hostel}<br></br></p></div>
            <button onClick={user==='adminadmin' ? approveWarden : approveStudent} >Approve</button>
        </div>;

    return (
        <div>
            {content}
        </div>

    )
}

export default ApprovalComponent
