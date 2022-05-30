import React from 'react'
// import { Router, Route } from 'react-router-dom'
import { Routes, Route} from "react-router-dom";
// import AdminDashboard from './components/Admin/AdminDashboard';
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/UserSignUp';
import AdminSignUp from '../src/Admin/AdminSignUp'
// import Test from './components/test';



export default function App() {
// const classes = useStyles();

  return (
    <>


    <Routes>
      <Route path="/" element={<LandingPage />} />
         <Route path="/admin/*" element={<Layout />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<SignUp />} />
         <Route path="/admin/register" element={<AdminSignUp />} />
         {/* <Route path="/test" element={<TestPage />} /> */}

    </Routes>





    </>
  )
}
