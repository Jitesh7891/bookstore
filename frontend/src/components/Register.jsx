// RegisterForm.js

import React, { useRef,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const navigate=useNavigate();
  
  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      navigate("/")
    }
  },[])
  

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Access input values using refs
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    // Check if the passwords match
    if (password === confirmPassword) {
      // Add your registration logic here
      console.log('Username:', username);
      console.log('Password:', password);
      console.log('Confirm Password:', confirmPassword);
      // Clear the form
      usernameRef.current.value = '';
      passwordRef.current.value = '';
      confirmPasswordRef.current.value = '';
    } else {
      // Passwords do not match
      alert("Passwords dont match")
      console.error('Passwords do not match');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-200 to-white">
      <form className="w-[50vw] h-[53vh] bg-white p-8 rounded shadow-md w-96" onSubmit={handleSubmit}>
        <h2 className="text-5xl font-bold mb-4">Register</h2>
        <div className="mt-8 mb-4">
          <label htmlFor="username" className="block text-gray-700 text-lg font-bold mb-2">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            ref={usernameRef}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-lg font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            ref={passwordRef}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirmPassword" className="block text-gray-700 text-lg font-bold mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            ref={confirmPasswordRef}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue hover:bg-blue-600 text-xl"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
