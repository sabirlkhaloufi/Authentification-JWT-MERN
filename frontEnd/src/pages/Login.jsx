import React from "react";
import axios from 'axios'
import { useState } from "react";

function Login(){
	const [formData, setFormData] = useState({})

	const onChange = (e)=>{
		setFormData((prevState) =>({
			...prevState,
			[e.target.name]:e.target.value
		}))
	}

const sendData = async(e) =>{
	e.preventDefault();
	
	console.log(formData);

	axios.post("http://localhost:4000/api/auth/login",formData)
	  .then( (response) => {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  });  
}

    return(
        <section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 col-lg-5">
					<div className="login-wrap p-4 p-md-5">
		      	<div className="icon d-flex align-items-center justify-content-center">
		      		<span className="fa fa-user-o"></span>
		      	</div>
		      	<h3 className="text-center mb-4">Have an account?</h3>
						<form onSubmit={sendData} className="login-form">
		      		<div className="form-group">
		      			<input type="email" className="form-control rounded-left" placeholder="email" name="email" onChange={onChange} required/>
		      		</div>
	            <div className="form-group d-flex">
	              <input type="password" className="form-control rounded-left" placeholder="Password" name="password" onChange={onChange} required/>
	            </div>
	            <div className="form-group d-md-flex">
	            	<div className="w-50">
	            		<label className="checkbox-wrap checkbox-primary">Remember Me
									  <input type="checkbox" />
									  <span className="checkmark"></span>
									</label>
								</div>
								<div className="w-50 text-md-right">
									<a href="#">Forgot Password</a>
								</div>
	            </div>
	            <div className="form-group">
	            	<button type="submit" className="btn btn-primary rounded submit p-3 px-5">Login</button>
	            </div>
	          </form>
	        </div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default Login;