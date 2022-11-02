import React from "react";
import {useState} from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
import Alert from "../Utils/Alert";
import { Link } from "react-router-dom";
// import Spinner from 'react-bootstrap/Spinner';

function Register(){

	const api = axios.create({
		baseURL: "http://localhost:4000/api/"
	});
	
    const [formData, setFormData] = useState({})
	const [error, setError] = useState(false)

	const onChange = (e)=>{
		setFormData((prevState) =>({
			...prevState,
			[e.target.name]:e.target.value
		}))
	}

const sendData = async(e) =>{
	setError(false)
	e.preventDefault();

	api.post("auth/register",formData)
	  .then( (response) => {
		
		console.log(response);
		Swal.fire({
			title: "Success",
			text: "Register success , please verify your acount",
			icon: "success",
		  });
	  })
	  .catch((error)=> {
		setError(error.response.data.message)
		console.log(error.response.data.message);
	  });  
}


    return(
    //     <section className="ftco-section">

	// 	<div className="container">
	// 		<div className="row justify-content-center">
	// 			<div className="col-md-6 col-lg-6">
	// 				<div className="login-wrap p-4 p-md-5">
	// 	      	<div className="icon d-flex align-items-center justify-content-center">
	// 	      		<span className="fa fa-user-o"></span>
	// 	      	</div>
	// 	      	<h3 className="text-center mb-4">Create New Account</h3>
	// 					<form  className="login-form" onSubmit={sendData}>
	// 	      		<div className="form-group">
	// 	      			<input type="email" className="form-control rounded-left" placeholder="Email" name="email" onChange={onChange} required/>
	// 	      		</div>

	// 				  <div className="form-group">
	// 	      			<input type="text" className="form-control rounded-left" placeholder="Name" name="name" onChange={onChange} required/>
	// 	      		</div>

    //             <div className="form-group d-flex">
    //             <select name="role" id="" className="form-control rounded-left" onChange={onChange} >
    //             <option value="select role" selected>select Role</option>
    //                 <option value="client">client</option>
    //                 <option value="livreur">livreur</option>
    //             </select>
    //             </div>
          

    //             <div className="form-group d-flex">
	//               <input type="password" className="form-control rounded-left" placeholder="Password" name="password" onChange={onChange} required/>
	//             </div>

    //             <div className="form-group d-flex">
	//               <input type="password" className="form-control rounded-left" placeholder="Password" name="Cpassword" onChange={onChange} required/>
	//             </div>
	            
	//             <div className="form-group">
	//             	<button type="submit" className="btn btn-primary rounded submit p-3 px-5">Register</button>
	//             </div>
	//           </form>
	//         </div>
	// 			</div>
	// 		</div>
	// 	</div>
	// </section>

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
                  <div className="mb-2">
				  <input type="email" className="form-control form-control-lg" placeholder="Email" name="email" onChange={onChange} required/>
                  </div>
                  <div className="mb-2">
				  <input type="text" className="form-control form-control-lg" placeholder="Name" name="name" onChange={onChange} required/>
                  </div>

				  <div className="mb-2 w-100">
					<select name="role" id="" className="form-control form-control-lg" onChange={onChange} >
						<option value="select role" selected>select Role</option>
						<option value="client">client</option>
						<option value="livreur">livreur</option>
					</select>
                  </div>

				  <div className="mb-2">
				  <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" onChange={onChange} required/>
                  </div>

				  <div className="mb-2">
				  <input type="password" className="form-control form-control-lg" placeholder="Password" name="Cpassword" onChange={onChange} required/>
                  </div>
                  
                  <div className="text-center">
                    <button type="submit" className="btn btn-lg btn-primary btn-lg w-100 mt-3 mb-0">Sign in</button>
                  </div>
				  
                </form>
              </div>
              <div className="card-footer text-center pt-0 px-lg-2 px-1">
                <p className="mb-4 text-sm mx-auto">have an account?
                  <Link to="/" className="text-primary text-gradient font-weight-bold">Login</Link>
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

export default Register;