import Navbar from '../components/Navbar';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import SideBar from '../components/SideBar';
import swal from 'sweetalert';
const ApplyMessReduction = () => {
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
    from: '',
    to: ''
  })
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  }
  var dtToday = new Date();
  var month = dtToday.getMonth() + 1;
  var day = dtToday.getDate() + 1;
  var year = dtToday.getFullYear();
  if (month < 10)
    month = '0' + month.toString();
  if (day < 10)
    day = '0' + day.toString();
  var minDate = year + '-' + month + '-' + day;
  var lastDay = new Date(dtToday.getFullYear(), dtToday.getMonth() + 1, 0);
  var lmonth = lastDay.getMonth();
  var ldate = lastDay.getDate();
  var lyear = lastDay.getFullYear();
  if (lmonth < 10)
    lmonth = month.toString();
  if (ldate < 10)
    ldate = '0' + ldate.toString();
  var maxDate = lyear + '-' + lmonth + '-' + ldate;
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.from === '' || data.to === '' || data.from > data.to) {
      swal("Error", "Enter valid Dates", "error");
    }else{
      await fetch("http://localhost:8800/student/apply-reduction/" + localStorage.getItem('id'), {
      method: 'POST',
      body: JSON.stringify({
        from: data.from,
        to: data.to,
        num: data.num
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
          swal("Applied Successfully","","success");
          setData({from:'',to:'',num:''})
        }else if(data.message === 'AE'){
          swal("Warning","Mess Reduction Already Applied","warning")
        }
      })
      .catch(error => {
        window.alert(error);
        return;
      })
    }
    
  }
  return (
    <div className='relative'>
      <Navbar />
      <div className='flex space-x-10'>
        <div><SideBar links={[
          { label: "Dashboard", path: "/student/" + localStorage.getItem("id") },
          { label: "Room Allocation", path: "/student/room/" + localStorage.getItem("id") },
          { label: "View Attendance", path: "/student/attendance/" + localStorage.getItem('id') },
          { label: "View Mess Bill", path: "/student/messbill/" + localStorage.getItem('id') },
          { label: 'Apply for Mess Reduction', path: '/student/reduction/' + localStorage.getItem('id') }]} />
        </div>
        <div>
          <h3>Apply for Mess Reduction</h3><br></br><br></br>
          <label>From:</label><input type='date' value={data.from} name='from' min={minDate} max={maxDate} onChange={handleChange}></input><br></br><br></br>
          <label>To: </label><input type='date' value={data.to} name='to' min={minDate} max={maxDate} onChange={handleChange}></input><br></br><br></br>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  )
}

export default ApplyMessReduction
