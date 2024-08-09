import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom';
const Signin = () => {
  const [credentials, setCredentials] = useState({email:'',name:'',password:'',cpassword:''});
  const [error, setError] = useState('');
  let navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    setError('');
    const response=await fetch("http://localhost:3000/user/signin",{
      method:'POST',
      headers:{
         'Content-Type': 'application/json'
      },
      body:JSON.stringify({
        name:credentials.name,//sending user input to requested body 
        email:credentials.email,
        password:credentials.password,
        cpassword:credentials.cpassword
      })
    });
    const json =await response.json();
    if(response.status===201){
      alert('Account Created Successfully');
    }
    else{
      setError(json.message||"An error occurred");
    }
  };
  const onchange=(event)=>{
    setCredentials({...credentials,[event.target.name]:event.target.value});
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-white '>
      
      <form className='border p-6 md:p-28 rounded-lg shadow-lg bg-white w-full  max-w-2xl mx-auto' onSubmit={handleSubmit}>   
      <h3 className='text-center md:-pt-10 text-xl md:text-2xl font-poppins font-bold text-sky-600'>Sign In to Edujoy </h3> 
      {error&&<p className='text-red-500 text-center mb-4'>{error}</p>} 
        <div className='mt-4 mx-auto items-center'>
          <label className='block text-gray-800'>Name</label>
          <input
            type="text"
            placeholder='Enter Your Full Name '
            name='name'
            value={credentials.name}
            onChange={onchange}
            className='w-full px-3 py-2 mt-2  md:w-full border rouder-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800'
          />
        </div>
        <div className='mt-4'>
          <label className='block text-gray-800'>Email</label>
          <input
            type="email"
            placeholder='Enter Your Email id  '
            name='email'
            value={credentials.email}
            onChange={onchange}
            className='w-full px-3 py-2 mt-2 border  md:w-full rouder-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800'
          />
        </div>
        <div className='mt-4'>
          <label className='block text-gray-800'>Password</label>
          <input
            type="password"
            placeholder='Enter password '
            name='password'
            value={credentials.password}
            onChange={onchange}
            className='w-full px-3 py-2 mt-2 border  md:w-full rouder-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800'
          />
        </div>
        <div className='mt-4 md:mx-auto'>
          <label className='block text-gray-800'>Confirm Password </label>
          <input
            type="password "
            placeholder='Enter confirm password '
            name='cpassword'
            value={credentials.cpassword}
            onChange={onchange}
            className='w-full px-3 md:w-full py-2 mt-2 border rouder-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800'
          />
        </div>
        <div className='mt-6 flex items-center justify-between'>
          <button className='btn bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Signin
