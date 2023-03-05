import React from 'react'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ReplyIcon from '@mui/icons-material/Reply';
export default function ContactForm() {
  return (
    <>
      <div className="container my-5 ">
        <div className="row d-flex justify-content-between">
          <div className="col-12  col-md-6 col-lg-6">
            <h5 className='text-info'>REQUEST A QUOTE</h5>
            <h2 className='fw-bold'>Need A Free Quote? Please Feel Free to Contact Us</h2>
            <hr className='w-25 border border-2 border-info' />
            <div className="row">
              <div className="col d-flex ">
                <p> <ReplyIcon className='text-info' /></p>
                <p className='ms-3'>Reply within 24 hours</p>
              </div>
              <div className="col d-flex">
                <p> <LocalPhoneIcon className='text-info' /></p>
                <p className='ms-3'>24 hrs telephone support</p>
              </div>
            </div>
            <p className=' text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident reiciendis fugit delectus, atque ipsa laudantium sequi perspiciatis vitae deserunt quasi placeat eveniet optio et ipsam soluta autem facilis ullam quod.</p>
            <div className="row mb-4 ">
              <div className="col d-flex  align-items-center ">
                <div className="icon">
                  <LocalPhoneIcon className='text-white fs-1 p-1' style={{ backgroundColor: '#219ebc', }} />
                </div>
                <div className="content ms-3 ">
                  <span className='fw-bold'>Call To Ask any Question</span><br />
                  <span className='text-info'>+012 345 6789</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6  ">
            <form className='bg-info py-3 text-center w-100  d-flex flex-column'>
              <div className="row  justify-content-center  ">
                <div className="col-12 col-md-6 col-lg-6    ">
                  <input type="text" placeholder='Your Name' className='mb-2 px-5  py-2' /><br />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-6">
                  <input type="email" placeholder='Your Email' className='mb-2 px-5 py-2' /><br />
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-6 ">
                  <input type="text" placeholder='Select A Services' className='mb-2 px-5  py-2' /><br />
                </div>
              </div>
              <div className="row justify-content-center"> 
                <div className="col-12 col-md-6 col-lg-6  ">
                  <textarea placeholder='Message' className='mb-2  px-5 py-2' id="" cols="23" rows="3"></textarea>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col">
                  <button className='mb-2 px-5 py-2 text-white border-0' style={{backgroundColor:'#03045e',}}>Request A Quote</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
