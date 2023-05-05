import './App.css';
import AdminLoginPage from './pages/AdminLoginPage';
import AdminPage from './pages/AdminPage';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WardenLoginPage from './pages/WardenLoginPage';
import WardenPage from './pages/WardenPage';
import StudentLoginPage from './pages/StudentLoginPage';
import StudentPage from './pages/StudentPage';
import AdminApproval from './components/AdminApproval'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<HomePage />}></Route>
        <Route exact path='/admin-login' element={<AdminLoginPage />}></Route>
        <Route exact path='/admin' element={<AdminPage />}></Route>
        <Route exact path='/warden-login' element={<WardenLoginPage />}></Route>
        <Route exact path='/warden' element={<WardenPage />}></Route>
        <Route exact path='/student-login' element={<StudentLoginPage />}></Route>
        <Route exact path='/student' element={<StudentPage />}></Route>
        <Route exact path='/admin/approval' element={<AdminApproval />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
