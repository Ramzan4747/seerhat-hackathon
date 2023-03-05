import React from 'react'
import { Link } from 'react-router-dom'
// import "./_navbar.scss"
export default function Navbar() {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-dark " style={{ backgroundColor: '#1d3557', }}>
                <div class="container-fluid">
                    <Link to='/' class="navbar-brand fw-bold fs-3" > <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-file-person" viewBox="0 0 16 16">
  <path d="M12 1a1 1 0 0 1 1 1v10.755S12 11 8 11s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h8zM4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4z"/>
  <path d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
</svg> Startup</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">

                            <li class="nav-item">
                                <Link class="nav-link active" to="/">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/about">About</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/services">Services</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link dropdown-toggle active" to="/services">Blog</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link dropdown-toggle active" to="/services">Pages</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link active" to="/services">Contact</Link>
                            </li>
                        </ul>
                        <form class="d-flex justify-content-center align-items-center" role="search">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16"  className='text-info'>
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                </svg>
                            <button className='btn btn-info mx-3'>Download Pro Version</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
