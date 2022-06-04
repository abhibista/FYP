import { useState } from 'react';
import '../styles/register.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Register() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [address, setAddress] = useState('');
const [mobile_no, setMobile_no] = useState('');
const [Contact_no, setContact_no] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);
const navigate = useNavigate();

// Handling the name change
// const handleName = (e) => {
// 	setName(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the email change
// const handleEmail = (e) => {
// 	setEmail(e.target.value);
// 	setSubmitted(false);
// };

// // Handling the password change
// const handlePassword = (e) => {
// 	setPassword(e.target.value);
// 	setSubmitted(false);
// };

// const handleaddress = (e) =>{
//     setAddress(e.target.value);
//     setSubmitted(false);
// };

// const handlemobile_no = (e) =>{
//     setMobile_no(e.target.value);
//     setSubmitted(false);
// };

// const handleContact_no = (e) =>{
//     setContact_no(e.target.value);
//     setSubmitted(false);
// };



// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	// if (name === '' || email === '' || password === '' || address === '' || mobile_no === '' || Contact_no === '')  {
	// setError(true);
	// } else {
	// // setSubmitted(true);
	// // setError(false);
	navigate('/login')
	// }
};

// Showing success message
// const successMessage = () => {
// 	return (
// 	<div
// 		className="success"
// 		style={{
// 		display: submitted ? '' : 'none',
// 		}}>
// 		<h1>User {name} successfully registered!!</h1>
// 	</div>
// 	);
// };

// Showing error message if error is true
// const errorMessage = () => {
// 	return (
// 	<div
// 		className="error"
// 		style={{
// 		display: error ? '' : 'none',
// 		}}>
// 		<h1>Please enter all the fields</h1>
// 	</div>
// 	);
// };

// return ( 
// 	<div className='Register'>
// 	<div className="form">
// 	<div>
// 		<h1>User Registration</h1>
// 	</div>

// 	{/* Calling to the methods */}
// 	<div className="messages">
// 		{errorMessage()}
// 		{successMessage()}
// 	</div>

// 	<form>
// 		{/* Labels and inputs for form data */}
// 		<label className="label">Name</label>
// 		<input onChange={handleName} className="input"
// 		value={name} type="text" />

// 		<label className="label">Email</label>
// 		<input onChange={handleEmail} className="input"
// 		value={email} type="email" />

// 		<label className="label">Password</label>
// 		<input onChange={handlePassword} className="input"
// 		value={password} type="password" />

//         <label className="label">address</label>
// 		<input onChange={handleaddress} className="input"
// 		value={address} type="address" />

//         <label className="label">mobile_no</label>
// 		<input onChange={handlemobile_no} className="input"
// 		value={mobile_no} type="mobile_no" />

//         <label className="label">Contact_no</label>
// 		<input onChange={handlemobile_no} className="input"
// 		value={mobile_no} type="mobile_no" />
// 		<div>
// 		<button onClick={handleSubmit} className="btn" type="submit">
// 		Submit
// 		</button>
			
// 		</div>
      
	
// 	</form>
// 	</div>
// 	</div>
// );
// }

return (
	<div className="Register">
  
	 <form onSubmit={handleSubmit}>
	   <div className="form-container">
		 <div className="heading">
		   <h1>Register Here</h1>
		 </div>
		 <div>
		   <label htmlFor="email">Email address</label>
		   <input
			 type="email"
			 id="email"
			 placeholder="Enter email"
			 required
			 onChange={(e) => setEmail(e.target.value)}
		   ></input>
		 </div>
		 <div>
		   <label htmlFor="password">Password</label>
		   <input
			 type="password"
			 id="password"
			 placeholder="Enter password"
			 required
			 onChange={(e) => setPassword(e.target.value)}
		   ></input>
		 </div>
		 <div>
		   <label htmlFor="Mobile_no">Mobile_no</label>
		   <input
			 type="Mobile_no"
			 id="Mobile_no"
			 placeholder="Enter Mobile_no"
			 required
			 onChange={(e) => setMobile_no(e.target.value)}
		   ></input>
		 </div>
		 <div>
		   <label htmlFor="Contact_no">Contact_no</label>
		   <input
			 type="Contact_no"
			 id="Contact_no"
			 placeholder="Enter Contact_no"
			 required
			 onChange={(e) => setContact_no(e.target.value)}
		   ></input>
		 </div>
		 <div>
		   <label htmlFor="address">Address</label>
		   <input
			 type="address"
			 id="address"
			 placeholder="Enter address"
			 required
			 onChange={(e) => setAddress(e.target.value)}
		   ></input>
		 </div>
		 <div>
		<button>Submit</button>
		<p>ALready have an account? Back to Login
		  <Link to='/login'>
		 Login
		  </Link>
		</p>
		 </div>
	   </div>
	   </form>
	 </div>    
);
};

