import React from "react";
import axios from 'axios'
import { useState } from "react";
import Alert from "../Utils/Alert";
import {Link, Navigate, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function Login(){
  const Navigate = useNavigate();
	const [formData, setFormData] = useState({})
  const [error, setError] = useState(false)
  const [cookies, setCookie] = useCookies();

	const onChange = (e)=>{
		setFormData((prevState) =>({
			...prevState,
			[e.target.name]:e.target.value
		}))
	}

const sendData = async(e) =>{
	e.preventDefault();
	

	axios.post("http://localhost:4000/api/auth/login",formData,{withCredentials:true})
	  .then( (response) => {
      Navigate("/profile");
	  })
	  .catch(function (error) {
      setError(error.response.data.message)
	  });  
}


    return(
		<main className="main-content  mt-0">
  <section>
    <div className="page-header min-vh-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
            <div className="card card-plain mt-6">
              <div className="card-header pb-0 text-start">
                <h4 className="font-weight-bolder">Sign In</h4>
              </div>
              <div className="card-body">
              <Alert error={error} />
                <form role="form" onSubmit={sendData}>
                  <div className="mb-3">
				  <input  type="email" className="form-control form-control-lg" placeholder="Email" name="email" onChange={onChange} required/>
                  </div>
				  <div className="mb-3">
				  <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" onChange={onChange} required/>
                  </div>



				<div className="form-check form-switch">
					<input className="form-check-input" type="checkbox" id="rememberMe" />
					<label className="form-check-label" htmlFor="rememberMe">Remember me</label>
				</div>


                  <div className="text-center">
                    <button type="submit" className="btn btn-lg btn-primary btn-lg w-100 mt-5 mb-0">Sign in</button>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center pt-0 px-lg-2 px-1">
                <p className="mb-2 text-sm mx-auto">d'ont have an account?
                  <Link to="/register" className="text-primary text-gradient font-weight-bold">Register</Link>
                </p>
              </div>
              <div className="card-footer text-center pt-0 px-lg-2 px-1">
                <p className="mb-4 text-sm mx-auto">
                  <Link to="/forgetpass" className="text-primary text-gradient font-weight-bold">Forget Password?</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
            <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden" style={{backgroundImage: 'url("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg")', backgroundSize: 'cover'}}>
              <span className="mask bg-gradient-primary opacity-6" />
              <h4 className="mt-5 text-white font-weight-bolder position-relative">"Attention is the new currency"</h4>
              <p className="text-white position-relative">The more effortless the writing looks, the more effort the writer actually put into the process.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
    )
}

export default Login;