import React from 'react'
import DoneIcon from '@mui/icons-material/Done';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Button from '../Button/Button';
export default function AboutCard() {
    return (
        <div className="container mb-5">
            <div className="row">
                <div className="col-12   col-md-6 col-lg-6">
                    <h5 className='text-info'>ABOUT US</h5>
                    <h2 className='fw-bold'>The Best Solution with 10 years of Experience</h2>
                    <hr className='w-25 border border-2 border-info' />
                    <p className='my-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident reiciendis fugit delectus, atque ipsa laudantium sequi perspiciatis vitae deserunt quasi placeat eveniet optio et ipsam soluta autem facilis ullam quod.</p>
                    <div className="row mb-3">
                        <div className="col">
                            <h5 ><DoneIcon className='text-info me-2' />Award Winning</h5>
                            <h5 ><DoneIcon className='text-info me-2' />Professional Staff</h5>
                        </div>
                        <div className="col">
                            <h5 ><DoneIcon className='text-info me-2' />24/7 Support</h5>
                            <h5 ><DoneIcon className='text-info me-2' />Fair Price</h5>
                        </div>
                    </div>
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

                    <Button text='Request a Quote' />
                </div>
                <div className="col-12   col-md-6 col-lg-6 ">
                    <div className='mt-3'>
                        <img className='img-fluid' src="https://images.unsplash.com/photo-1573167507387-6b4b98cb7c13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80" alt="image" width='550px' height='400px' />
                    </div>
                </div>
            </div>
        </div>
    )
}
