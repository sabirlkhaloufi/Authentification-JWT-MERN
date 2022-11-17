import React from 'react'

function CardR() {
  return (
    <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
    <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden" style={{backgroundImage: 'url("https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg")', backgroundSize: 'cover'}}>
    
      <span className="mask bg-gradient-primary opacity-6" />
      <h4 className="mt-5 text-white font-weight-bolder position-relative">Welcome To Marhaba App</h4>
      <img src="assets/images/marhabalogo.png" className='img-thumbnail  position-absolute' style={{right: '40%', top: "25%"}} width={150} height={60} />
    </div>
  </div>
  )
}

export default CardR
