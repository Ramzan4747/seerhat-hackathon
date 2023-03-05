import React from 'react'
import Button from '../Button/Button'
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
export default function Price() {
    return (

        <section className='mb-5'>
            <div className="container ">
                <div className="row text-center">
                    <div className="col  ">
                        <h5 className='text-info'>PRICING PLANS</h5>
                        <h2 className='fw-bold'>Custom IT Solutions for Your<br />Successfully Business</h2>
                        <hr className=' border border-3 border-info ' style={{ marginLeft: 'auto', marginRight: 'auto', width: 150, }} />
                    </div>
                </div>
                <div className="row g-0">
                    <div className="col-12 col-md-6 col-lg-4">
                    <div class="card border-0" style={{ backgroundColor: '#e0fbfc', }}>
                            <div class="card-body ms-4">
                                <h5 class="card-title text-info fw-bold">Basic Plan</h5>
                                <h6 class="card-subtitle text-secondary"  style={{ fontSize:13, }} >FOR SMALL SIZE BUSINESS</h6>
                                <hr />
                                <h3 className='fw-bold'><sup className='fs-5'>$</sup>49.00<sub style={{ fontSize: 10, fontWeight: 'bold', }}>/Month</sub></h3>
                                <div className="iconic d-flex justify-content-between">
                                <p className='mb-1 text-secondary' style={{fontSize:13,}}>HTML5 & CSS3</p>
                                <p><CheckIcon className='text-info'/></p>
                                </div>
                                <div className="iconic d-flex justify-content-between">
                                <p className='mb-1 text-secondary' style={{fontSize:13,}}>Bootstrap v5</p>
                                <p><CheckIcon className='text-info'/></p>
                                </div>
                        
                                <div className="iconic d-flex justify-content-between">
                                <p className='mb-1 text-secondary' style={{fontSize:13,}}>Responsive Layout</p>
                                <p><CloseIcon className='text-danger'/></p>
                                </div>
                                <div className="iconic d-flex justify-content-between">
                                <p className='mb-1 text-secondary' style={{fontSize:13,}}>Cross-browser Support</p>
                                <p><CloseIcon className='text-danger'/></p>
                                </div> 
                        
                                <Button text='Order Now' /> <br /> <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                    <div class="card border-0 shadow-lg" >
                            <div class="card-body ms-4">
                                <h5 class="card-title text-info fw-bold">Standard Plan</h5>
                                <h6 class="card-subtitle text-secondary"  style={{ fontSize:13, }} >FOR MEDIUM SIZE BUSINESS</h6>
                                <hr />
                                <h3 className='fw-bold'><sup className='fs-5'>$</sup>129.00<sub style={{ fontSize: 10, fontWeight: 'bold', }}>/Month</sub></h3>
                                <div className="iconic d-flex justify-content-between">
                                <p className='mb-1 text-secondary' style={{fontSize:13,}}>HTML5 & CSS3</p>
                                <p><CheckIcon  className='text-info'/></p>
                                </div>
                                <div className="iconic d-flex justify-content-between">
                                <p className='mb-1 text-secondary' style={{fontSize:13,}}>Bootstrap v5</p>
                                <p><CheckIcon  className='text-info'/></p>
                                </div>
                        
                                <div className="iconic d-flex justify-content-between">
                                <p className='mb-1 text-secondary' style={{fontSize:13,}}>Responsive Layout</p>
                                <p><CheckIcon className='text-info'/></p>
                                </div>
                                <div className="iconic d-flex justify-content-between">
                                <p className='mb-1 text-secondary' style={{fontSize:13,}}>Cross-browser Support</p>
                                <p><CloseIcon  className='text-danger'/></p>
                                </div> 
                        
                                <Button text='Order Now' /> <br /> <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                    <div class="card border-0" style={{ backgroundColor: '#e0fbfc', }}>
                            <div class="card-body ms-4">
                                <h5 class="card-title text-info fw-bold">Advanced Plan</h5>
                                <h6 class="card-subtitle text-secondary"  style={{ fontSize:13, }} >FOR LARGE SIZE BUSINESS</h6>
                                <hr />
                                <h3 className='fw-bold'><sup className='fs-5'>$</sup>230.00<sub style={{ fontSize: 10, fontWeight: 'bold', }}>/Month</sub></h3>
                                <div className="iconic d-flex justify-content-between">
                                <p className='mb-1 text-secondary' style={{fontSize:13,}}>HTML5 & CSS3</p>
                                <p><CheckIcon  className='text-info' /></p>
                                </div>
                                <div className="iconic d-flex justify-content-between">
                                <p className='mb-1 text-secondary' style={{fontSize:13,}}>Bootstrap v5</p>
                                <p><CheckIcon  className='text-info' /></p>
                                </div>
                        
                                <div className="iconic d-flex justify-content-between">
                                <p className='mb-1 text-secondary' style={{fontSize:13,}}>Responsive Layout</p>
                                <p><CheckIcon  className='text-info' /></p>
                                </div>
                                <div className="iconic d-flex justify-content-between">
                                <p className='mb-1 text-secondary' style={{fontSize:13,}}>Cross-browser Support</p>
                                <p><CheckIcon  className='text-info' /></p>
                                </div> 
                        
                                <Button text='Order Now' /> <br /> <br />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>

    )
}
