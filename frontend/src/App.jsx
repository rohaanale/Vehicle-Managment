import { useState } from 'react'
import Navbar from "./components/Header/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Vehicle from './pages/Vehicle.jsx';
import ContactUs from './pages/ContactUs.jsx';
import Services from './pages/Services.jsx';
import Reports from './pages/Reports.jsx';
function App() {
  return (
   <div>
       <Routes>
           <Route path='/' element={<Home />} />
           <Route path='/vehicle' element={<Vehicle />} />
           <Route path='/contact-us' element={<ContactUs />} />
           <Route path='/services' element={<Services />} />
           <Route path='/reports' element={<Reports />} />
           <Route path='/login' element={<SignIn />} />
           <Route path='/register' element={<SignUp />} />
       </Routes>
   </div>
  )
}

export default App
