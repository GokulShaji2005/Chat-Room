import React from 'react'
import { useState } from 'react';
import { FaGoogle } from "react-icons/fa";
import { Auth,Provider } from '../../firebase-config';
import { signInWithPopup,createUserWithEmailAndPassword } from 'firebase/auth';

import Cookies from 'universal-cookie';

const cookies=new Cookies();

export const SignUp = ({setisAuth}) => {
  const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


  const SignWithGoogle= async()=>{
    try{
      const result= await signInWithPopup(Auth,Provider);
      cookies.set("auth-token",result.user.refreshToken);
      setisAuth(true);
  
       
    }
    catch(error){
      console.log(error)
    }
  }

  const SignUpWithPassowrd= async()=>{
    try{
      const userCredential=await createUserWithEmailAndPassword(Auth,email,password)
      const user=userCredential.user;
      cookies.set("auth-token",user.refreshToken);
      setisAuth(true);
      console.log(user)
  
       
    }
    catch(error){
      console.log(error)
    }
  }



  return (
    <div className='text-purple-600 flex justify-center items-center min-h-screen bg-gray-100'>
        <div className='w-full  md:w-1/2  max-w-md border bg-white text-center p-8 rounded-lg shadow-lg m-4'>
      <h1 className='text-3xl font-bold mb-6'>Sign-In</h1>
    <div className='w-full mb-4 '>
      <label htmlFor="email" className='flex flex-start font-semibold'>Email</label>
        <input 
        type="email" 
        name="email" 
        id="email" 
        value={email}
            onChange={(e)=>setEmail(e.target.value)}
           placeholder="you@example.com"
        className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'/>
    </div>
    <div className='mb-6'>
      <label htmlFor="password" 
        className='flex flex-start font-semibold'
        >Password</label>
        <input 
        type="password" 
        name="password" 
        id="password" 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
       
        className='w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500'/>
        </div>
        <button type="button"
        className='w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition '
        onClick={SignUpWithPassowrd}
        >Sign Up</button>
       <div className='flex text-center gp-4 my-6' >
        <hr className='flex-grow border-t border-gray-300' />
        <span className=' text-gray-500 text-sm'>Or</span>
        <hr className='flex-grow border-t border-gray-300'/>
       </div>
        <button type="button"
        className='w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 transition flex justify-center items-center gap-2'
        onClick={SignWithGoogle}
        > <FaGoogle className='text-lg'/>
        Continue with Google</button>

        {/* <div className='text-sm mt-2'>Don't already have an account?      
        
        
      
        </div> */}
        </div>
        
    </div>
  )
}
