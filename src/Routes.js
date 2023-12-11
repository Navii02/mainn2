
import { useContext } from 'react'
import { Route,Routes } from 'react-router-dom'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import AdminSignup from './components/pages/AdminSignup'
import AdminLogin from './components/pages/AdminLogin'
import Home from './components/pages/home'
import DataEditing from './components/pages/DataEditing';
import FeeReminders from './components/pages/FeeReminders';
import NoticeUpdates from './components/pages/NoticeUpdates';
import OfficeHome from './components/pages/OfficeHome';
import UserHome from './components/pages/UserHome';
import Dashboard from './components/pages/Dashboard';
import Services from './components/pages/Services';
import AboutUs from './components/pages/AboutUs';
import ContactUs from './components/pages/ContactUs';
import Certificates from './components/pages/CertificateRequest';
import AdminPage from './components/pages/CertificateDistribution';
import FeeDetails from './components/pages/FeeDetails'
import ScholarshipDetails from './components/pages/ScholarshipDetails'


import { UserContext } from './App'


function RoutesComp() {
  const userContext = useContext(UserContext)
  return (
    <>
      <Routes>
        {userContext.email && (
          <Route path='/' element={<>Welcome {userContext.email}</>} />
        )}
        {!userContext.email && (
          <>
            <Route path='/' element={<Home />} />  
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/adminsignup' element={<AdminSignup />} />
            <Route path='/admin' element={<AdminLogin />} />
            <Route path="/office" element= {<OfficeHome/>}/>
            <Route path="/data-editing" element={<DataEditing />} />
            <Route path="/fee-reminders" element={<FeeReminders />} />
            <Route path="/notice-updates" element={<NoticeUpdates />} />
            <Route path="/user" element={<UserHome />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/certificates-user" element={<Certificates />} />
            <Route path='/certificate-distribution' element={<AdminPage/>}/>
            <Route path='/fee-details' element ={<FeeDetails/>}/>
            <Route path='/scholarships' element={<ScholarshipDetails/>}/>
          </>
        )}
      </Routes>
    </>
  )
}

export default RoutesComp