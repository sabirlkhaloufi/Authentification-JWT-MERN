import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
            <div className="container position-sticky z-index-sticky top-0">
  <div className="row">
    <div className="col-12">
      <nav className="navbar navbar-expand-lg blur border-radius-lg top-0 z-index-3 shadow position-absolute mt-4 py-2 start-0 end-0 mx-4">
        <div className="container-fluid">
          <a className="navbar-brand font-weight-bolder ms-lg-0 ms-3 " href="../pages/dashboard.html">
            Marhaba
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
              <li className="nav-item">
                <Link to="/register" className="nav-link me-2" href="../pages/profile.html">
                  <i className="fa fa-user opacity-6 text-dark me-1" />
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login" className="nav-link me-2" href="../pages/sign-up.html">
                  <i className="fas fa-user-circle opacity-6 text-dark me-1" />
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ForgetPass" className="nav-link me-2" href="../pages/sign-in.html">
                  <i className="fas fa-key opacity-6 text-dark me-1" />
                  ForgetPass
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav d-lg-block d-none d-flex gap-3">
              <li className="nav-item">
                <Link to="/Register" className="btn btn-sm mb-0 me-1 btn-primary">Register</Link>
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