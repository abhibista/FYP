import React, { useState } from "react";
import ReactDOM from "react-dom";
import axios from "axios" ;
import '../styles/loginstyle.css'
import {Link} from 'react-router-dom'


const Login = () => {
 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const Login = async(e) =>{
      e.preventDefault();
        const repsonse = await axios.post("https://localhost:5001/Login")
    }
    return (
       <div className="Login">
     
        <form onSubmit={Login}>
          <div className="form-container">
            <div className="heading">
              <h1>Log In</h1>
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
           <button>LogIn</button>
           <p>Don't have an account? 
             <Link to='/register'>
             Register
             </Link>
           </p>
            </div>
          </div>
          </form>
        </div>    
  );
};

export default Login
    