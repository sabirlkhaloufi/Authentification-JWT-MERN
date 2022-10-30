import React from "react";

function ForgetPass(){
	
    return(
        <section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 col-lg-5">
					<div className="login-wrap p-4 p-md-5">
		      	<div className="icon d-flex align-items-center justify-content-center">
		      		<span className="fa fa-user-o"></span>
		      	</div>
		      	<h3 className="text-center mb-4">Enter your Email for Reset Password</h3>
						<form action="#" className="login-form">
		      		<div className="form-group">
		      			<input type="email" className="form-control rounded-left" placeholder="Enter Your Email" required/>
		      		</div>
	        
	            <div className="form-group">
	            	<button type="submit" className="btn btn-primary rounded submit p-3 px-5">Get Started</button>
	            </div>
	          </form>
	        </div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default ForgetPass;