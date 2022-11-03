import React from 'react'
import axios from 'axios'

function Profile() {
  const role = "client";
  axios.get(`http://localhost:4000/api/user/${role}/me`,{
    headers:{'set-cookie': document.coockie}
  ,withCredentials:true}).then((Response)=>{
    console.log(Response.data);
  }).catch((Error)=>{
    console.log(Error.response.data.message);
  })
  return (
    <div>
    </div>
  )
}

export default Profile
