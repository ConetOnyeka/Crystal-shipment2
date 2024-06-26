import React from 'react'
import Card2 from './Card2'
import Rectangle from'../assets/Rectangle.png'

function Services() {
  return (
    <>
     <div className="bg-cover" >
      <div className="text-center text-light" data-aos="zoom-in">
        <h1 className='pt-5'>Services</h1>
        <p>Home <i className="fa fa-arrow-right ms-3 me-3"></i> Services</p>
      </div>
      </div>
      <div className="container mt-5">
        <Card2/>
        <div className="row">
          <div className="col-md-6" data-aos="fade-down-left">
          <img src={Rectangle} alt="" className='img-fluid' />
          </div>
          <div className="col-md-6" data-aos="fade-down-right">
          <h2>THE COMPLETE SOLUTION</h2>
          <div className="bg-red" ></div>
          <p className='mt-3'>Our warehousing services are known nationwide to be one of the most reliable, safe and affordable, because we take pride in delivering the best of warehousing services, at the most reasonable prices. Pleasure and praising pain was born and I will give you a complete account of system, and expound actual teachings occasionally circumstances.</p>
         </div>
        </div>
      </div>
    </>
  )
}

export default Services