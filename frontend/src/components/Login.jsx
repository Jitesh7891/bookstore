import React, { useState } from 'react'

export default function Login() {

        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
      
        const handleSubmit = (e) => {
          e.preventDefault();
          // Add your login logic here
          console.log('Username:', username);
          console.log('Password:', password);
        }

  return (
    <div className="h-[100vh] flex items-center justify-center bg-gradient-to-r from-blue-200 to-white">
    <form className="flex-col justify-around items-center  w-[50vw] h-[47vh] bg-white p-10 rounded shadow-md" onSubmit={handleSubmit}>
      <h2 className="text-5xl font-bold mb-4">Login</h2>
      <div className="mt-8 mb-4 ">
        <label htmlFor="username" className="block text-gray-700 text-lg font-bold mb-2">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-gray-700 text-lg font-bold mb-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 rounded"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          type="submit"
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue hover:bg-blue-600 text-xl"
        >
          Log in
        </button>
      </div>
    </form>
  </div>
);

}
