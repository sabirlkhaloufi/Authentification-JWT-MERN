import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


function Inputs(props){
    return(
        <div className="form-group d-flex">
	        <input type={props.type} className="form-control rounded-left" 
            placeholder={props.placeholder} name={props.name} onChange={props.onChange} required/>
	    </div>
    )
}

export default Inputs;