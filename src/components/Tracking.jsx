import React from 'react'
import Rectangle from'../assets/Rectangle.png'

function Tracking() {
  return (
    <>
      <div className="bg-cover" >
      <div className="text-center text-light" data-aos="zoom-in">
        <h1 className='pt-5'>Tracking</h1>
        <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i> Tracking</p>
      </div>
      </div>
      <div className="container mt-5"></div>
      <div className="container">
        <div className="row">
        <div className="col-md-8">
        <h2>TRACK YOUR SHIPMENT</h2>
          <div className="bg-red" ></div>
          <p className='mt-3'>If you require maximum visibility to your Freight transactions, contact our logistic <br /> customer team or you can track your cargo by using below tracking system.</p>
         </div>
         <div className="col-md-4">
         <input type="email" className='form-control' placeholder='Enter your tracking ID Here'/>
         <button className='btn btn-danger mt-3'>Tracking</button>
          </div>
        </div>
       
        </div>
       


    </>
  )
}

export default Tracking