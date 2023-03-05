import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Blog() {
    return (
        <section className='mb-5'>
            <div className="container">
                <div className="row text-center mb-4">
                    <div className="col">
                        <h5 className='text-info'>LATEST BLOG</h5>
                        <h2 className='fw-bold'>Read The Latest  Articles From <br />Our Blog Post</h2>
                        <hr className=' border border-3 border-info ' style={{ marginLeft: 'auto', marginRight: 'auto', width: 150, }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 mb-5 ">
                        <div class="card rounded-2 border-0" >
                            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dGVhbXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" class="card-img-top" alt="..." />
                            <div class="card-body" style={{ backgroundColor: '#e0fbfc', }}>
                                <h5 class="card-title ">How to build a website</h5>
                                <p className='text-secondary' style={{fontSize:13}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.consectetur adipisicing elit.</p>
                                <h5 class="card-title text-info" style={{ fontSize: 14 }}>READ MORE <ArrowRightAltIcon/></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4  mb-5">
                        <div class="card rounded-2 border-0" >
                            <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHRlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" class="card-img-top" alt="..." />
                            <div class="card-body" style={{ backgroundColor: '#e0fbfc', }}>
                                <h5 class="card-title ">How to build a website</h5>
                                <p className='text-secondary' style={{fontSize:13}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. consectetur adipisicing elit.</p>
                                <h5 class="card-title text-info " style={{ fontSize: 14 }}>READ MORE <ArrowRightAltIcon/></h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-5 ">
                        <div class="card rounded-2 border-0" >
                            <img src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRlYW18ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" class="card-img-top" alt="..." height='238px' />
                            <div class="card-body" style={{ backgroundColor: '#e0fbfc', }}>
                                <h5 class="card-title ">How to build a website</h5>
                                <p className='text-secondary' style={{fontSize:13}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. consectetur adipisicing elit.</p>
                                <h5 class="card-title text-info" style={{ fontSize: 14 }}>READ MORE <ArrowRightAltIcon/></h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
