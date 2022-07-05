import React from 'react'
// import { Router, Route } from 'react-router-dom'
import { Routes, Route} from "react-router-dom";
// import AdminDashboard from './components/Admin/AdminDashboard';
import Layout from './components/Layout'
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import SignUp from './pages/UserSignUp';
import AdminSignUp from '../src/Admin/AdminSignUp'
import AdminToken from '../src/Admin/AdminToken'
// import { useSelector } from 'react-redux';
// import Line from './Admin/Line';
// import Test from './components/test';




export default function App() {
// const classes = useStyles();
// const show = useSelector(store => store.auth.isAuthenticated)


  return (
    <>


    <Routes>
    <Route path="*" element={<LandingPage />} />

      <Route path="/" element={<LandingPage />} />
         <Route path="/admin/*" element={<Layout />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<SignUp />} />
         <Route path="/admin/register" element={<AdminSignUp />} />
         <Route path="/admin/register/verify" element={<AdminToken />} />

         {/* <Route path="/test" element={<TestPage />} /> */}

    </Routes>





    </>
  )
}
