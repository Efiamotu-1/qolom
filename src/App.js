import React from 'react'
// import { Router, Route } from 'react-router-dom'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AdminDashboard from './components/Admin/AdminDashboard';
import Layout from './components/Layout'
import LandingPage from './components/LandingPage';
import BusinessHours from './pages/BusinessHours'
import ChangePassword from './pages/ChangePassword'
import ContactUs from './pages/ContactUs'
import CreateLine from './pages/CreateLine'
import EditProfile from './pages/EditProfile'
import Home from './pages/Home'
import LogOut from './pages/LogOut'
// import { makeStyles } from '@material-ui/core';



export default function App() {
// const classes = useStyles();

  return (
    <>


<BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
         <Route path="/admin/*" element={<Layout />} />
       {/* <Route path="teams" element={<Home />}>
          <Route path=":teamId" element={<BusinessHours />} />
          <Route path="new" element={<CreateLine />} />
          <Route index element={<EditProfile />} />
        </Route> */}
      {/* </Route>  */}
    </Routes>
  </BrowserRouter>




    {/* <Routes>
      <Route path="/" element={<LandingPage />} >
      <Route path="/admin" element={<Layout />}>
        
      </Route>

      {/* 
      <Route path="/admin" element={<AdminDashboard />} /> */}

      
      



        {/* <Route path="/admin" element={<Layout />}> */}
 
               {/* <Layout> */}
        {/* <Routes> */}
                
              {/* <Route path="/admin" element={<Home />}/>
              <Route path="/businesshours" element={<BusinessHours />} />
              <Route path="/changePassword" element={<ChangePassword />} />
              <Route path="/contactus" element={<ContactUs />} />
              <Route path="/createline" element={<CreateLine />} /> 
              <Route path="/editprofile" element={<EditProfile />} />  */}
       {/* </Routes> */}

              {/* </Layout> */}  
        {/* </Route>     */}
    {/* </Route> */}
        {/* <Route path="/logout" element={<LogOut />} /> */}

  

      
    

       {/* </Routes> */}
 

    </>
  )
}
