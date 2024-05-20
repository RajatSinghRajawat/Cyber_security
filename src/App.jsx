import React from 'react'
import CybertNav from './Components/CybertNav'
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import CyberBody from './Components/CyberBody'
import CyberCourses from './Components/CyberCourses'
import CyberServices from './Components/CyberServices'
import CyberAbout from './Components/CyberAbout'
import CyberSignup from './Components/CyberSignup'
import CyberCertificate from './Components/CyberCertificate'
import CyberContact from './Components/CyberContact'

const App = () => {
  return (
    <>
   
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<CyberBody/>} />
      <Route path='/courses' element={<CyberCourses/>} />
      <Route path='/services' element={<CyberServices/>} />
      <Route path='/about' element={<CyberAbout/>} />
      <Route path='/signup' element={<CyberSignup/>} />
      <Route path='/certificate' element={<CyberCertificate/>} />
      <Route path='/contact' element={<CyberContact/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App