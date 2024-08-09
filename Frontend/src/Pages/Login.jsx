import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [_, setAuthUser,] = useAuth()
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:3000/user/login", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: credentials.email,
                    password: credentials.password
                })
            });
            const json = await response.json();
            if (response.status === 200) {
                alert("Logged in Successfully ");
                const user = {
                    name: json.user.name,
                    email: json.user.email,
                    authToken: json.authToken
                };
                localStorage.setItem('User', JSON.stringify(user));
                setAuthUser(user);        
            }
            else {
                alert(json.message || "Invalid Credentials")
            }
        } catch (error) {
            console.log("An Error Occured :", error);
            alert("An error Occured During login .please try again ");
        }
    };

    const handleChange = (event) => {
        setCredentials({ ...credentials, [event.target.name]: event.target.value });
    }

    return (

        <form onSubmit={handleSubmit} className='border p-6 rounded-lg shadow-lg bg-white w-full max-w-md '>
            <div className='bg-sky-300 h-10 items-center justify-center'>
                <h1 className=' text-white text-xl text-center pt-2 font-semibold '>Log in to EduJoy</h1>
            </div>
            <div className='mt-4'>
                <label className='block text-gray-400'>Email</label>
                <input
                    type="email"
                    placeholder='Enter your email'
                    value={credentials.email}
                    name='email'
                    id='email'
                    onChange={handleChange}
                    required
                    className='w-full px-3 py-2 mt-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800'
                />
            </div>
            <div className='mt-4'>
                <label className='block text-gray-800'>Password</label>
                <input
                    type="password"
                    placeholder='Enter your password'
                    value={credentials.password}
                    name='password'
                    id='password'
                    onChange={handleChange}
                    required
                    className='w-full px-3 py-2 mt-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-yellow-500 text-gray-800'
                />
            </div>
            <div className="mt-6 flex items-center justify-between">
                <button type="submit" className='btn bg-yellow-500 text-gray-900 px-4 py-2 rounded-md hover:bg-yellow-600'>Submit</button>
                <Link to="/signin" className='underline text-blue-300 hover:text-blue-500'>Sign In</Link>
            </div>
        </form>

    );
};

export default Login;
