import React from 'react'
// import { Router, Route } from 'react-router-dom'
import { Routes, Route} from "react-router-dom";
import Layout from './components/Layout'
import BusinessHours from './pages/BusinessHours'
import ChangePassword from './pages/ChangePassword'
import ContactUs from './pages/ContactUs'
import CreateLine from './pages/CreateLine'
import EditProfile from './pages/EditProfile'
import Home from './pages/Home'
import LogOut from './pages/LogOut'

export default function App() {
  return (
    <>
      <Layout >

     <Routes>

        <Route exact path="/" element={<Home />} />
        <Route path="/businesshours" element={<BusinessHours />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/createline" element={<CreateLine />} />
        <Route path="/editprofile" element={<EditProfile />} />
        
        <Route path="/logout" element={<LogOut />} />




    </Routes>
        
      </Layout>


    </>
  )
}
