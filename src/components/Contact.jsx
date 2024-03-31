import React from 'react'
import Rectangle from'../assets/Rectangle.png'
import Form from './Form'
import Sms from '../assets/Sms.png'
import What from '../assets/What.png'

function Contact() {
  return (
    <>
         <div className="bg-cover" >
      <div className="text-center text-light" data-aos="zoom-in">
        <h1 className='pt-5'>Contact</h1>
        <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i>Contact</p>
      </div>
      </div>

      <div className="container mt-5">
 <div className="row">
  <div className="col-md-6"  data-aos="zoom-in"></div>
   <h5>Kindly call us or join our support group on WhatsApp.</h5>
  <div className="d-flex mt-3 gap-2">
    <div className="flex-grow-2">
      <img src={What} alt="" />
      </div>
    <p>+234 08068205307</p>
    </div>
     <div className="d-flex mt-3 gap-2">
      <div className="flex-grow-2">
      <img src={What} alt="" />
    </div>
   <p>+234 8068205307</p>
     </div>
     <div className="d-flex mt-3 gap-2">
      <div className="flex-grow-2 me-2">
      <img src={Sms} alt="" />
     </div>
    <p>info@crystalshipment.com</p>
    </div>
     </div>
     
     <div className="col-md-6" data-aos="zoom-in">
 <Form/>
  </div>
  </div>
  

    </>
  )
}

export default Contact