import React from 'react'
import { Link } from 'react-router-dom'
const WardenSideBar = () => {
    const links = [
        {label:"Approval",path:"/admin/approval"},
        {label:"View Warden Details",path:"/admin/view-warden"}
    ]
    const renderedItems = links.map((link)=>{
      return <Link to={link.path} label={link.label}>{link.label}</Link>
   })
  return (
    <div className='flex flex-col justify-around'>
      {renderedItems}
    </div>
  )
}

export default WardenSideBar
