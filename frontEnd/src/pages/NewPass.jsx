import React from "react";

function NewPass(){
    return(
        <section className="ftco-section">
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-md-6 col-lg-5">
					<div className="login-wrap p-4 p-md-5">
		      	<div className="icon d-flex align-items-center justify-content-center">
		      		<span className="fa fa-user-o"></span>
		      	</div>
		      	<h3 className="text-center mb-4">Create New Password</h3>
						<form action="#" className="login-form">
		      		<div className="form-group">
		      			<input type="password" className="form-control rounded-left" placeholder="New password" required/>
		      		</div>
                      <div className="form-group">
		      			<input type="password" className="form-control rounded-left" placeholder="confirm password" required/>
		      		</div>
	        
	            <div className="form-group">
	            	<button type="submit" className="btn btn-primary rounded submit p-3 px-5">Save</button>
	            </div>
	          </form>
	        </div>
				</div>
			</div>
		</div>
	</section>
    )
}

export default NewPass;