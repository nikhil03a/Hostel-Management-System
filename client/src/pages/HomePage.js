import React , {useEffect} from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    useEffect(()=>{
        localStorage.clear();
    })
  return (
    <div>
      <Link to='/admin-login'>Admin Login</Link><br></br>
      <Link to='/warden-login'>Warden Login</Link><br></br>
      <Link to='/student-login'>Student Login</Link><br></br>
    </div>
  )
}

export default HomePage
