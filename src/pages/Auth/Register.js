import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { AuthContext } from '../../context/AuthContext';

const initialState = {
  fullname:'',
  email: "",
  password: "",
  confirmPassword: "",
}


export default function Register() {

  const [state, setState] = useState(initialState);
  const { setIsAuthenticated } = useContext(AuthContext)
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setState({ ...state, [name]: value })

    console.log(state)
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    const { email, password } = state

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setIsAuthenticated(true)
        navigate("/")
        window.toastify("user is created successfully ", "success")
        // ...
      })
      .catch((error) => {
        setIsAuthenticated(false)
        const errorCode = error.code;
        const errorMessage = error.message;
        window.toastify("user not created", "error")
        // ..
      })


    // setIsProcessing(false)

  }

  return (
    <>
      <section class="vh-100">
        <div class="container-fluid">
          <div class="row">
            <div class="col-sm-6 text-black">

              <div class="px-5 ms-xl-4">
                <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style="color: #709085;"></i>
                <span class="h1 fw-bold mb-0">Logo</span>
              </div>

              <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                <form style="width: 23rem;">

                  <h3 class="fw-normal mb-3 pb-3" style="letter-spacing: 1px;">Sign Up</h3>

                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example12">Full Name</label>
                    <input type="text" id="form2Example12" name='fullname' class="form-control form-control-lg" onChange={handleChange} />
                  </div>
                  <div class="form-outline mb-4">
                    <label class="form-label" for="form2Example19">Email address</label>
                    <input type="email" id="form2Example19" name='email' class="form-control form-control-lg" onChange={handleChange} />
                  </div>
                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example18" name='password' class="form-control form-control-lg" onChange={handleChange} />
                    <label class="form-label" for="form2Example18">Password</label>
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example28" name='confirmPassword' onChange={handleChange} class="form-control form-control-lg" />
                    <label class="form-label" for="form2Example28">Confirm Password</label>
                  </div>

                  <div class="pt-1 mb-4">
                    <button class="btn btn-info btn-lg " type="button" onClick={handleSubmit}>Sign Up</button>
                  </div>

                  <p>Already have an account? <Link to="/auth/login" class="link-info">Sign In</Link></p>

                </form>

              </div>

            </div>
            <div class="col-sm-6 px-0 d-none d-sm-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                alt="Login image" class="w-100 vh-100" style="object-fit: cover; object-position: left;" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

    

