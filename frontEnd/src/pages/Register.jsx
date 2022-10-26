import React from "react";
import {useState} from 'react'
function Register(){
    const [formData, setFormData] = useState({
        email:"",
        name:"",
        passwor:"",
        role:""
    })

    console.log(formData);

    return(
        <section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 col-lg-6">
					<div className="login-wrap p-4 p-md-5">
		      	<div className="icon d-flex align-items-center justify-content-center">
		      		<span className="fa fa-user-o"></span>
		      	</div>
                <div></div>
		      	<h3 className="text-center mb-4">Have an account?</h3>
						<form action="#" className="login-form">
		      		<div className="form-group">
		      			<input type="email" className="form-control rounded-left" placeholder="Email" required/>
		      		</div>
	            <div className="form-group d-flex">
	              <input type="text" className="form-control rounded-left" placeholder="Name" required/>
	            </div>

                <div className="form-group d-flex">
                <select name="role" id="" className="form-control rounded-left" >
                <option value="" selected>select Role</option>
                    <option value="client">client</option>
                    <option value="livreur">livreur</option>
                </select>
                </div>
          

                <div className="form-group d-flex">
	              <input type="password" className="form-control rounded-left" placeholder="Password" required/>
	            </div>

                <div className="form-group d-flex">
	              <input type="password" className="form-control rounded-left" placeholder="Password" required/>
	            </div>
	            
	            <div className="form-group">
	            	<button type="submit" className="btn btn-primary rounded submit p-3 px-5">Register</button>
	            </div>
	          </form>
	        </div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default Register;