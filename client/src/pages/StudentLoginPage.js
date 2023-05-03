import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const StudentLoginPage = () => {
    const navigate = useNavigate();
    const [uname, setUname] = useState('');
    const [pass, setPass] = useState('');
    const handleUname = (e) => {
        setUname(e.target.value);
    }
    const handlePass = (e) => {
        setPass(e.target.value);
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch("http://localhost:8800/student/login", {
            method: 'POST',
            body: JSON.stringify({
                username: uname,
                password: pass
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                return response.json()
            })
            .then(data => {
                const result = data.result
                const token = data.token
                if (result === 'SUCCESS' && token === 'studentstudent') {
                    localStorage.clear();
                    localStorage.setItem('user-token', token);
                    navigate('/student');
                }
            })
            .catch(error => {
                window.alert(error);
                return;
            })

    }
    return (
        <div>
            <form>
                <h1>Student Login</h1>
                UserName: <input type="text" name="uname" value={uname} onChange={handleUname}></input><br></br>
                Password: <input type="password" name="pass" value={pass} onChange={handlePass}></input><br></br>
                <input type="submit" value="Submit" onClick={handleSubmit}></input>
            </form>
        </div>
    )
}

export default StudentLoginPage
