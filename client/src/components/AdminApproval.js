import React, { useEffect, useState } from 'react'
import AdminSideBar from "./AdminSideBar"
import ApprovalComponent from './ApprovalComponent'
const AdminApproval = () => {
  const [details, setDetails] = useState([])
  useEffect(() => {
    const getDetails = async () => {
      await fetch("http://localhost:8800/admin/approval", {
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
  if(details.message!="Nothing"){
     renderedItems = details.map((detail) => {
      return <ApprovalComponent detail={detail} />
    })
  }else{
    renderedItems =  (<div>Nothing to Approve....</div>)
  }
  
  return (
    <div className='container mx-10 grid grid-cols-3 gap-6 mt-4'>
      <AdminSideBar />
      <div className='col-span-2'>{renderedItems}</div>
    </div>
  )
}

export default AdminApproval

