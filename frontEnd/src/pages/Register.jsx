import React from "react";
import {useState} from 'react'
import axios from 'axios'
function Register(){
	
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

	axios.post("http://localhost:4000/api/auth/register",formData)
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
				<div className="col-md-6 col-lg-6">
					<div className="login-wrap p-4 p-md-5">
		      	<div className="icon d-flex align-items-center justify-content-center">
		      		<span className="fa fa-user-o"></span>
		      	</div>
		      	<h3 className="text-center mb-4">Create New Account</h3>
						<form  className="login-form" onSubmit={sendData}>
		      		<div className="form-group">
		      			<input type="email" className="form-control rounded-left" placeholder="Email" name="email" onChange={onChange} required/>
		      		</div>
	            <div className="form-group d-flex">
	              <input type="text" className="form-control rounded-left" placeholder="Name" name="name" onChange={onChange} required/>
	            </div>

                <div className="form-group d-flex">
                <select name="role" id="" className="form-control rounded-left" onChange={onChange} >
                <option value="select role" selected>select Role</option>
                    <option value="client">client</option>
                    <option value="livreur">livreur</option>
                </select>
                </div>
          

                <div className="form-group d-flex">
	              <input type="password" className="form-control rounded-left" placeholder="Password" name="password" onChange={onChange} required/>
	            </div>

                <div className="form-group d-flex">
	              <input type="password" className="form-control rounded-left" placeholder="Password" name="Cpassword" onChange={onChange} required/>
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