import React from 'react';
import '../App.css';

const Login = () => {
  return (
    <div className='login'>
      <h2>Login To Be Able To Send Your Ratings</h2>
      <form>
	      {/* <label for='username'>Username</label>   */}
        <input id='username' type='email' placeholder='Enter Your Email Address'></input>
	      {/* <label for='password'>Password</label>   */}
        <input id='password' type='password' placeholder='Enter Your Password'></input>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};
export default Login;
