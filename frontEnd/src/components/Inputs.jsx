import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


function Inputs(props){
    const onChange = (e) => {
        // setFormData((prevState)=>({
        //     ...prevState,
        //     [e.target.name] : e.target.value
        // }))
    } 

    return(
        <div className="form-group d-flex">
	        <input type={props.type} className="form-control rounded-left" 
            placeholder={props.placeholder} name={props.name} onChange={onChange} required/>
	    </div>
    )
}

export default Inputs;