import React from 'react'
import { CDBSidebar, CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
const SideBar = ({user,links}) => {
  const renderedItems = links.map((link) => {
    return (
    <NavLink exact to={link.path} activeClassName="activeClicked">
      <CDBSidebarMenuItem icon="columns" className='text-black'>{link.label}</CDBSidebarMenuItem>
    </NavLink>)
  })
  return (
    <>
    <div className='flex flex-col margin-left:0px'>
      <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial'}}>
        <CDBSidebar  textColor="#fff" backgroundColor="papayawhip">
          <CDBSidebarHeader className='bg-gray-200 text-black' prefix={<i className="fa fa-bars fa-large"></i>}>
            <a className="text-decoration-none" style={{ color: 'inherit' }}>
              Admin
            </a>
          </CDBSidebarHeader>
          <CDBSidebarContent className="sidebar-content bg-gray-200">
            <CDBSidebarMenu>{renderedItems}</CDBSidebarMenu>
          </CDBSidebarContent>
        </CDBSidebar>
      </div>
    </div>
    </>
  )
}

export default SideBar
