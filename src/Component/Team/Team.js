import React from 'react'
import './_team.scss'
export default function Team() {
    return (
        <section className='mb-5'>
            <div className="container">
                <div className="row text-center mb-4">
                    <div className="col">
                        <h5 className='text-info'>TEAM MEMBERS</h5>
                        <h2 className='fw-bold'>Professional Stuffs Ready to <br />Help Your Business</h2>
                        <hr className=' border border-3 border-info ' style={{ marginLeft: 'auto', marginRight: 'auto', width: 150, }} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4 mb-5 ">
                        <div class="card rounded-2 border-0" >
                            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80" class="card-img-top" alt="..." height='330px' />
                            <div class="card-body" style={{ backgroundColor: '#e0fbfc', }}>
                                <h5 class="card-title text-info fw-bold  text-center">Ammara Batool</h5>
                                <h5 class="card-title  text-center text-secondary " style={{fontSize:14}}>App Developer</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4  mb-5">
                        <div class="card rounded-2 border-0" >
                            <img src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" class="card-img-top" alt="..." height='330px' />
                            <div class="card-body" style={{ backgroundColor: '#e0fbfc', }}>
                                <h5 class="card-title text-info  fw-bold text-center">Shahid Khan</h5>
                                <h5 class="card-title  text-center  text-secondary " style={{fontSize:14}}>Web Developer</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 mb-5 ">
                        <div class="card rounded-2 border-0" >
                            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="card-img-top" alt="..." height='330px' />
                            <div class="card-body" style={{ backgroundColor: '#e0fbfc', }}>
                            <h5 class="card-title text-info  fw-bold text-center">Abdur Rauf</h5>
                            <h5 class="card-title  text-center  text-secondary " style={{fontSize:14}}>Software Engineer</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
