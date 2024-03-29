import React, { useState } from 'react';
import { FaUser } from "react-icons/fa";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import'./Signin.scss';
import { FaGoogle } from "react-icons/fa";

const Signin = () => {

      const [password, setPassword] = useState('');
      const [showPassword, setShowPassword] = useState(false);
    
      const handlePasswordChange = (e) => {
        setPassword(e.target.value);
      };
    
      const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };
      const [backgroundColor, setBackgroundColor] = useState('red');
  return (
// <body style={{ backgroundColor }}>   
<div className='set' style={{backgroundColor:"red"}}>
 <div className='mainsignin'> 
            <div className='mainsigninin'>

       <div className="first">
       <br></br>
       <br></br>
<div className="seg">
        <h1>SignIn</h1>
        <br></br>
        <br></br>
        <form>
        <div>
          <label htmlFor="username">Username:</label>
          <br></br>
<div className="connect">
          <input
            type="text"
            className="input"
            name="username"
            placeholder='username'
            /><FaUser className='ic'/>
            </div>
        </div>
        <div>
        <br></br>
          <label htmlFor="password">Password:</label>
          <br></br>
<div className="connect">
          <input
            type={showPassword ? 'text' : 'password'}
            className="input"
            name="password"
            placeholder='password'
            />
            {showPassword ? (
        <FaEyeSlash className='ic' onClick={togglePasswordVisibility} />
      ) : (
        <FaEye className='ic' onClick={togglePasswordVisibility} />
      )}
                  </div>
        </div>
       <div className="rem">

        <div>
          <label htmlFor="rememberMe">
            <input
              type="checkbox"
              id="rememberMe"
              name="rememberMe"
              />
            Remember Me
          </label>
          <a href='#' className='forget'>Forgot Password?</a>
        </div>
              </div>
              <br></br>
       <br></br>
        <button type="submit" id='sign-but'>Sign In</button>
        <br></br>

        <br></br>
        <hr style={{width:'330px'}}></hr>
        <br></br>
        <br></br>

        <div>
          <button type="button"id='google' >
            Sign In with Google <FaGoogle className='g-icon' />

          </button>
        </div>
      </form>
              </div>
      </div>
      <div className="second"></div>

      </div>
    </div>
    </div>      // </body>
  )
}

export default Signin;