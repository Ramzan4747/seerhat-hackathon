import React from 'react'

export default function Testimonial() {
    return (
        <>
            <section className='mb-5'>
                <div className="container">
                    <div className="row text-center mb-4">
                        <div className="col">
                            <h5 className='text-info'>TESTIMONIAL</h5>
                            <h2 className='fw-bold'>What Our Clients Say About <br />Our Digital Services</h2>
                            <hr className=' border border-3 border-info ' style={{ marginLeft: 'auto', marginRight: 'auto', width: 150, }} />
                        </div>
                    </div>
                    <div className="row g-0">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div class="card border-0" style={{ backgroundColor: '#e0fbfc', }}>
                                <div class="card-body ms-4">
                                    <div className="profile d-flex">
                                        <img src='https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=' alt="" width='80px' />
                                        <div className="profile_name ms-3">
                                            <h5 class="card-title text-info fw-bold">Client Name</h5>
                                            <h6 class="card-subtitle text-secondary" style={{ fontSize: 13, }} >PROFESSION</h6>
                                        </div>
                                    </div>
                                    <hr />
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui sed rem tempora amet</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div class="card border-0 shadow-lg" >
                                <div class="card-body ms-4">
                                    <div className="profile d-flex">
                                        <img src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc=" alt="" width='80px' />
                                        <div className="profile_name ms-3">
                                            <h5 class="card-title text-info fw-bold">Client Name</h5>
                                            <h6 class="card-subtitle text-secondary" style={{ fontSize: 13, }} >PROFESSION</h6>
                                        </div>
                                    </div>
                                    <hr />
                                    <p className='text-secondary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui sed rem tempora amet</p>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div class="card border-0" style={{ backgroundColor: '#e0fbfc', }}>
                                <div class="card-body ms-4">
                                <div className="profile d-flex">
                                        <img src="https://media.istockphoto.com/id/1311084168/photo/overjoyed-pretty-asian-woman-look-at-camera-with-sincere-laughter.jpg?b=1&s=170667a&w=0&k=20&c=XPuGhP9YyCWquTGT-tUFk6TwI-HZfOr1jNkehKQ17g0=" alt="" width='80px' />
                                        <div className="profile_name ms-3">
                                            <h5 class="card-title text-info fw-bold">Client Name</h5>
                                            <h6 class="card-subtitle text-secondary" style={{ fontSize: 13, }} >PROFESSION</h6>
                                        </div>
                                    </div>
                                    <hr />
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus qui sed rem tempora amet</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
