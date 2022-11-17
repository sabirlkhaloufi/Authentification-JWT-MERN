import React, {useState} from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { useParams, useNavigate } from "react-router-dom";
import CardR from './partials/CardR';


function NewPass(){
  const Navigate = useNavigate();
	const api = axios.create({
		baseURL: "http://localhost:4000/api/"
	});
	
  const {token} = useParams(); 

    const [formData, setFormData] = useState({})

	const onChange = (e)=>{
		setFormData((prevState) =>({
			...prevState,
			[e.target.name]:e.target.value
		}))
	}

const sendData = async(e) =>{
	e.preventDefault();

	api.post(`auth/resetpassword/${token}`,formData)
	  .then( (response) => {
		console.log(response);
		Swal.fire({
			title: "Success",
			text: "Password is insert",
			icon: "success",
		  });

      Navigate("/login")

	  })
	  .catch((error)=> {
		console.log(error);
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
                <h4 className="font-weight-bolder">Create New Password</h4>
              </div>
              <div className="card-body">
                <form role="form" onSubmit={sendData}>
                  <div className="mb-3">
				  <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" onChange={onChange} required/>
                  </div>

				  <div className="mb-3">
				  <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" name="Cpassword" onChange={onChange} required/>
                  </div>

                  <div className="text-center">
                    <button type="submit" className="btn btn-lg btn-primary btn-lg w-100 mt-3 mb-0">Confirm</button>
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

export default NewPass;