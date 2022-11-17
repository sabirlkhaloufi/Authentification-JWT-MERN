import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useCookies } from "react-cookie";
import jwt_decode from "jwt-decode";
import CardR from '../partials/CardR';
import Alert from '../../Utils/Alert';


function Profile() {
  const [InfoUser, setInfoUser] = useState({});
  const [cookies, setCookie] = useCookies();
  const [error, setError] = useState(true)

  const auth = cookies;
  const role = jwt_decode(auth.token).role;

  useEffect(() => {
      axios.get(`http://localhost:4000/api/user/${role}/me`,{
      headers:{'set-cookie': document.coockie}
    ,withCredentials:true}).then((Response)=>{
      setInfoUser(Response.data)
      console.log(Response.data);
      setError(Response.data.isVerified)
    }).catch((Error)=>{
      console.log(Error.response.data.message);
    })
  }, [])
  

  return (
    <main className="main-content  mt-0">
    <section>
      <div className="page-header min-vh-100">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
              <div className="card card-plain mt-6">
              {!error && <Alert error={"please verified your account"} />}
                <div className="card-header pb-0 text-start">
                  <h4 className="font-weight-bolder">Profile</h4>
                </div>
                <div className="card-body">
                <h3>role : {role}</h3>
                 <h3>name : {InfoUser.name}</h3>
                 <h3>email : {InfoUser.email}</h3>
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

export default Profile
