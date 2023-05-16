import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../components/SideBar'
import Navbar from '../components/Navbar'
const AdminPage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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


  return (
    <div>
      <Navbar />
      <div className='flex'>
        <div>
          <SideBar user="Admin" links={[
            { label: "DashBoard", path: '/admin' },
            { label: "Authenticate Warden", path: "/admin/approval" },
            { label: "View Warden Details", path: "/admin/view-warden" },
            { label: "Enable Room Allocation", path: "/admin/enable-room" },
            { label: "View Student Details", path: '/admin/view-student' }
          ]} />
        </div>
        <div className="min-h-screen bg-gray-100 py-4 flex flex-col justify-center sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-semibold">Admin Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              {/* Statistics section */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h2 className="text-lg font-semibold mb-4">Statistics</h2>
                  {/* Add your statistics content here */}
                </div>
              </div>

              {/* Approval section */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h2 className="text-lg font-semibold mb-4">Approvals</h2>
                  {/* Add your approval content here */}
                </div>
              </div>

              {/* Other features section */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h2 className="text-lg font-semibold mb-4">Other Features</h2>
                  {/* Add your other features content here */}
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default AdminPage
