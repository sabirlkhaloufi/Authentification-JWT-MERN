import React from 'react'
import {useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'

function VerifyEmail() {
  const Navigate = useNavigate();

    // const [] = useState(false);
    const api = axios.create({
		baseURL: "http://localhost:4000/api/"
	});

    const { token } = useParams();
    console.log(token);

    
    api.get(`auth/verify-email/${token}`)
    .then((response)=>{
        console.log(response.data);
        Swal.fire({
            title: "Success",
            text: "Email Is verified Successfuly",
            icon: "success",
        });

        Navigate("/login")




    }).catch((error)=>{
        console.log(error.response.data);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Email Not Verified!',
          footer: '<a href="">Send Another Verification</a>'
          });
    })


  return (
    <div>
    </div>
  )
}

export default VerifyEmail
