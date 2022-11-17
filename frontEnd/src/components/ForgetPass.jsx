import React, {useState} from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import Alert from "../Utils/Alert";
import CardR from './partials/CardR';

function ForgetPass(){
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

	api.post("auth/forgetPassword",formData)
	  .then( (response) => {
		
		console.log(response);
		Swal.fire({
			title: "Success",
			text: "please verify your acount for create new password",
			icon: "success",
		  });
	  })
	  .catch((error)=> {
		setError(error.response.data.message)
		console.log(error.response.data.message);
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
                <h4 className="font-weight-bolder">Enter Your Email</h4>
              </div>
              <div className="card-body">
              <Alert error={error} />
                <form role="form" onSubmit={sendData}>
                  <div className="mb-2">
				  <input type="email" className="form-control form-control-lg" placeholder="Email" name="email" onChange={onChange} required/>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-lg btn-primary btn-lg w-100 mt-3 mb-0">Search</button>
                  </div>
                </form>
              </div>
              <div className="card-footer text-center pt-0 px-lg-2 px-1">
                <p className="mb-4 text-sm mx-auto">have an account?
                  <a href="javascript:;" className="text-primary text-gradient font-weight-bold">Login</a>
                </p>
              </div>
            </div>
          </div>
          <CardR/>
        </div>
      </div>
    </div>
  </section>
</main>
    )
}

export default ForgetPass;