import React ,{useState} from 'react'
import {useParams,Navigate} from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2'
import Api from '../../Utils/Api';

function VerifyEmail() {

    const [isVerified,setisVerified] = useState(false);
    const api = axios.create({
		baseURL: "http://localhost:4000/api/"
	});

    const { token } = useParams();

    
    api.get(`auth/verify-email/${token}`)
    .then((response)=>{
        console.log(response.data);
        setisVerified(true);

        console.log(Api);
        Swal.fire({
            title: "Success",
            text: "Email Is verified Successfuly",
            icon: "success",
        });

        Navigate("/login")

    }).catch((error)=>{
        console.log(error);
    })


  return (
    <div>
      {isVerified &&  <Navigate to={'/NewPass/'+token} replace={true} />}
      Email not validate send another
    </div>
  )
}

export default VerifyEmail
