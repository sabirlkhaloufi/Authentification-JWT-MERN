import React,{useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// import '/images/marhabalogo.png'
import { useCookies } from 'react-cookie';

function Header(){

  const Naviagate = useNavigate();
  const [cookies] = useCookies();
  const [auth, setAuth] = useState(false)
  // const auth = cookies;


  useEffect(() => {
    setAuth(cookies)
  },[])




  const Logout = ()=>{
    // auth.token = false
    setAuth(false)
    axios.get("http://localhost:4000/api/auth/logout",{
      headers:{'set-cookie': document.coockie}
    ,withCredentials:true}).then((Response)=>{
      Naviagate("/Login")
    }).catch((err)=>{
      console.log(err);
    })
  }

    return(
            <div className="container position-sticky z-index-sticky top-0">
  <div className="row">
    <div className="col-12">
      <nav className="navbar navbar-expand-lg blur border-radius-lg top-0 z-index-3 shadow position-absolute mt-4 py-0 start-0 end-0 mx-4">
        <div className="container-fluid">
          <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3 " href="../pages/dashboard.html">
            <img src="assets/images/marhabalogo.png" alt="" srcset="" width={150} height={60} />
          </a>
          <button className="navbar-toggler shadow-none ms-2" type="button" data-bs-toggle="collapse" data-bs-target="#navigation" aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon mt-2">
              <span className="navbar-toggler-bar bar1" />
              <span className="navbar-toggler-bar bar2" />
              <span className="navbar-toggler-bar bar3" />
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navigation">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link to="/dashboard" className="nav-link d-flex align-items-center me-2 active" aria-current="page" href="../pages/dashboard.html">
                  <i className="fa fa-chart-pie opacity-6 text-dark me-1" />
                  Dashboard
                </Link>
              </li>

              {!auth.token &&  <li className="nav-item">
                <Link to="/login" className="nav-link me-2" href="../pages/sign-up.html">
                  <i className="fas fa-user-circle opacity-6 text-dark me-1" />
                  Login
                </Link>
              </li>}
             
            </ul>
            <ul className="navbar-nav d-lg-block d-none d-flex gap-3">
              <li className="nav-item">
                {auth.token ? <Link onClick={Logout} className="btn btn-sm mb-0 me-1 btn-primary">Logout</Link> : 
                <Link to="/Register" className="btn btn-sm mb-0 me-1 btn-primary">Register</Link>}
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </div>
  </div>
</div>

    )
}

export default Header;