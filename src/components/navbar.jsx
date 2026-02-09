import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div className="flex w-full justify-between items-center px-4 py-3">
      
      <Link
        to="/home"
        className="text-2xl font-cherry text-black !no-underline hover:text-gray-700"
      >
        CPPVR
      </Link>
      
      <div className="flex gap-4">
        <Link
          to="/projects"
          className="text-black !no-underline hover:text-gray-700"
        >
          Projects
        </Link>
        <Link
          to="/about"
          className="text-black !no-underline hover:text-gray-700"
        >
          About
        </Link>
        <Link
          to="/people"
          className="text-black !no-underline hover:text-gray-700"
        >
          People
        </Link>
        <Link
          to="/technology"
          className="text-black !no-underline hover:text-gray-700"
        >
          Technology
        </Link>
        <Link
          to="/contact"
          className="text-black !no-underline hover:text-gray-700"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};
