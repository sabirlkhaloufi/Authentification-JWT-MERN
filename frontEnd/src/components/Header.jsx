import React from "react";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <ul className="d-flex gap-3">
                <li>
                    <Link to='/'>Login</Link>
                </li>
                <li>
                    <Link to='/Register'>Register</Link>
                </li>
                <li>
                    <Link to='/NewPass'>NewPass</Link>
                </li>
                <li>
                    <Link to='/ForgetPass'>ForgetPass</Link>
                </li>
                <li>
                    <Link to='/Dashboard'>Dashboard</Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;