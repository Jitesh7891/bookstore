// Sidebar.js
import React from 'react';

const Sidebar = () => {
  const categories = [
    'All',
    'Bestsellers',
    'Newest',
    'Fiction',
    'Comics',
    'Literature',
    'History',
    'Spiritual',
    'Horror',
    'Fantasy',
    'Biography',
  ];

  return (
    <div className="bg-gray-100 w-[13vw] p-4 max-h-[calc(100vh-64px)] overflow-y-auto">
      <h2 className="text-4xl py-2 font-semibold mb-2">Categories</h2>
      <ul className=''>
        {categories.map((category, index) => (
          <li key={index} className="py-3 flex-col items-center justify-center">
            <a
              href="#"
              className="text-2xl  "
              >
              {category}
            </a>
            <div className='my-2 w-[10vw] h-[3px] bg-black'/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
