import React, { useState } from 'react';
import './Login.css';
import assets from '../../assets/assets';
import { signup, login, resetPass } from '../../config/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [currState, setCurrState] = useState("Sign up");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    if (!isChecked) {
      toast.error("Please agree to the terms before proceeding!");
      return;
    }

    if (currState === "Sign up") {
      signup(userName, email, password);
    } else {
      login(email, password);
    }
  };

  return (
    <div className='login'>
      <ToastContainer />
      <img className='logo' src={assets.logo_big} alt="Logo" />
      <form onSubmit={onSubmitHandler} className='login-form'>
        <h2>{currState}</h2>
        {currState === "Sign up" && (
          <input 
            onChange={(e) => setUserName(e.target.value)} 
            value={userName} 
            className='form-input' 
            type="text" 
            placeholder='Username' 
            required 
          />
        )}
        <input 
          onChange={(e) => setEmail(e.target.value)} 
          value={email} 
          className='form-input' 
          type="email" 
          placeholder='Email address' 
          required 
        />
        <input 
          onChange={(e) => setPassword(e.target.value)} 
          value={password} 
          className='form-input' 
          type="password" 
          placeholder='Password' 
          required 
        />
        <div className='login-term'>
          <input 
            type="checkbox" 
            checked={isChecked} 
            onChange={() => setIsChecked(!isChecked)} 
          />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <button type='submit'>
          {currState === "Sign up" ? "Create account" : "Login now"}
        </button>
        <div className='login-forgot'>
          {currState === "Sign up" ? (
            <p className='login-toggle'>
              Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span>
            </p>
          ) : (
            <p className='login-toggle'>
              Create an account <span onClick={() => setCurrState("Sign up")}>Click here</span>
            </p>
          )}
          {currState === "Login" && (
            <p className='login-toggle'>
              Forgot Password? <span onClick={() => resetPass(email)}>Click here</span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
