import React from 'react'

export default function Carousal() {
    return (
<>
        <section className='mb-5'>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" style={{ position: 'relative', }}>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80" class="d-block w-100" alt="..." height='650px' />
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" class="d-block w-100" alt="..." height='650px' />
                    </div>
                    <div class="carousel-item">
                        <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" class="d-block w-100" alt="..." height='650px' />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container  mb-5 ms-lg-5" style={{ position: 'absolute', top: 730 }} >
                <div className="row g-0">
                    <div className="col-12 col-md-6 col-lg-4 sm-mb-5 md-mb-5">
                        <div class="card border-0 rounded-0" style={{ backgroundColor: '#219ebc', }} >
                            <div className="profile d-flex  align-items-center ms-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16" style={{ backgroundColor: '#FFFFFF', padding: 10, color: '#219ebc', }}>
                                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                                </svg>
                                <div class="card-body   ">
                                    <h5 class="card-title text-white">Happy Client</h5>
                                    <h3 class="card-subtitle  text-white ">12345</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 sm-mb-5 md-mb-5">
                        <div class="card border-0 rounded-0"  >
                            <div className="profile d-flex  align-items-center ms-5 ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16" style={{ backgroundColor: '#219ebc', padding: 10, color: 'white', }}>
                                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                                </svg>
                                <div class="card-body ">
                                    <h5 class="card-title text-info">Happy Client</h5>
                                    <h3 class="card-subtitle fw-bold ">12345</h3>
                                </div>
                            </div>
                        </div>
                    </div><div className="col-12 col-md-6 col-lg-4 sm-mb-5 md-mb-5">
                        <div class="card border-0 rounded-0" style={{ backgroundColor: '#219ebc', }} >
                            <div className="profile d-flex align-items-center ms-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16" style={{ backgroundColor: '#FFFFFF', padding: 10, color: '#219ebc', }}>
                                    <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                                    <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
                                </svg>
                                <div class="card-body ">
                                    <h5 class="card-title text-white">Happy Client</h5>
                                    <h3 class="card-subtitle  text-white ">12345</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        </>
    )
}
