import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { AuthContext } from '../../context/AuthContext';

const initialState = {
  email: "",
  password: ""
}


export default function Login() {

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

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setIsAuthenticated(true)
        navigate("/")
        window.toastify("user logged in ", "success")
        // ...
      })
      .catch((error) => {
        setIsAuthenticated(false)
        const errorCode = error.code;
        const errorMessage = error.message;
        window.toastify("user not logged in ", "error")
        // ..
      })


    // setIsProcessing(false)

  }

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">

              <div className="px-5 ms-xl-4">
                <i className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" ></i>
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>

              <div className="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

                <form style={{width: 23}}>

                  <h3 className="fw-normal mb-3 pb-3" style={{letterSpacing:1}}>Log in</h3>

                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example18" name='email' className="form-control form-control-lg" onChange={handleChange} />
                    <label className="form-label" for="form2Example18">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form2Example28" name='password' onChange={handleChange} className="form-control form-control-lg" />
                    <label className="form-label" for="form2Example28">Password</label>
                  </div>

                  <div className="pt-1 mb-4">
                    <button className="btn btn-info btn-lg " type="button" onClick={handleSubmit}>Login</button>
                  </div>

                  <p className="small mb-5 pb-lg-2"><a className="text-muted" href="#!">Forgot password?</a></p>
                  <p>Don't have an account? <Link to="/auth/register" className="link-info">Register here</Link></p>

                </form>

              </div>

            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img3.webp"
                alt="Login image" className="w-100 vh-100" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
