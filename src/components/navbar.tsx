import React, { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md">
      <div className="container px-4 py-2 mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#" className="text-xl font-bold">
            Packets
          </a>
          <div className="ml-4">
            <select className="border rounded px-2 py-1">
              <option>Country</option>
              {/* Add more country options here */}
            </select>
          </div>
        </div>
        <div className="hidden md:flex items-center">
          <input
            type="text"
            className="border rounded px-4 py-2 mr-2"
            placeholder="Search for properties"
          />
          <button className="bg-blue-500 text-white rounded px-4 py-2">
            List Properties
          </button>
          <button className="bg-blue-500 text-white rounded px-4 py-2">
            Login
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggle} className="text-gray-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden block bg-white p-4">
          <input
            type="text"
            className="border rounded px-4 py-2 mb-2"
            placeholder="Search for properties"
          />
          <button className="bg-blue-500 text-white rounded px-4 py-2 mb-2">
            List Properties
          </button>
          <button className="bg-blue-500 text-white rounded px-4 py-2">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
