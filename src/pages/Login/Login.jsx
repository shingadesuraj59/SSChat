import React from 'react'
import assets from '../../assets/assets'
import { useState } from 'react';

const Login = () => {

  const [currState,setCurrState] = useState("Sign Up");
  return (
    <div className="login min-h-screen bg-[url('/background.png')] bg-no-repeat bg-cover flex items-center justify-evenly">
  <img className='w-[max(20vw,200px)]' src={assets.logo_big} alt="logo" />
  <form className="login-form bg-white px-7 py-5 flex flex-col gap-5 rounded-lg text-black">
    <h2 className='font-medium text-2xl'>{currState}</h2>
    {
      currState==="Sign Up"?<input type="text" placeholder='username' className="form-input px-3 py-2 border border-[#111111] rounded-lg " required/>:<></>
    }
    
    <input type="email" placeholder='email address' className="form-input px-3 py-2 border border-[#111111] rounded-lg" required />
    <input type="password" placeholder='password' className="form-input px-3 py-2 border border-[#111111] rounded-lg" required />
    <button className='bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer' type='submit'>
      {currState==="Sign Up"?"Create Account":"Login Now"}
    </button>
    <div className='login-term flex gap-2 text-[16px]'>
      <input className='cursor-pointer' type="checkbox" />
      <p>Agree to the terms of use & privacy policy.</p>
    </div>
    <div className="login-forgot flex flex-col gap-[5px]">
      {
        currState==="Sign Up"?<p  className="login-toggle text-[17px]">Already have an account <span onClick={()=>setCurrState("Login")} className='text-blue-500 hover:text-blue-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer'>Click here</span></p>:
        <p  className="login-toggle text-[17px]">Create a new account <span onClick={()=>setCurrState("Sign Up")} className='text-blue-500 hover:text-blue-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer'>Click here</span></p>
      }
      
      
    </div>
  </form>
</div>

  )
}

export default Login
