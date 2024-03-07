import React,{useEffect} from "react";
import Header from './components/Header'
import Homepage from './components/Homepage'
import Services from './components/Services'
import Tracking from './components/Tracking'
import Contact from './components/Contact'
import Footer from './components/Footer'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration:3000
    });

  }, [])

  return (
    <>
 <Header/>
 <Router>
  <Routes>
  <Route exact path ='/' element={<Homepage/>}/>
  <Route exact path ='/services' element={<Services/>}/>
  <Route exact path ='/tracking' element={<Tracking/>}/>
  <Route exact path ='/contact' element={<Contact/>}/>
 </Routes>
  </Router>
 <Footer/>
    </>
  )
}

export default App