// Navbar.js
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'

const Navbar = () => {

  const state1 = useSelector((state) => state.store.username);
  const state2 = useSelector((state) => state.store.email);
  const[name,setName]=useState(state1)
  const[email,setEmail]=useState(state2)

  useEffect(()=>{
    setName(state1)
    setEmail(state2)
  },[state1,state2])


  return (
    <nav className="bg-blue-100 p-4 shadow-md flex items-center justify-between">
      {/* Left Side */}
      <div>
        <span className="text-xl font-semibold">My Bookstore</span>
      </div>

      {/* Center (Search Bar) */}
      <div >
        <input
       
          type="text"
          placeholder="Search..."
          className="w-[20vw] px-4 py-2 rounded-md border focus:outline-none focus:border-blue-500"
        />
      </div>

      <div>
        welcome {name}
      </div>

      {/* Right Side (Cart) */}
      <div>
        <button className="w-[7vw] text-xl hover:bg-blue-700 bg-blue-500 text-white px-4 py-2 rounded-md">
          Cart
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
