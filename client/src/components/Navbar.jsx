// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const activeClass = "text-primary font-bold border-b-2 border-primary";

  return (
    <div className="navbar bg-gray-800 text-white shadow-md px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            tabIndex={0}
            className="btn btn-ghost btn-circle md:hidden"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          {menuOpen && (
            <ul tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-gray-700 rounded-box w-40">
              <li><NavLink to="/" className={({isActive}) => isActive ? activeClass : undefined} onClick={() => setMenuOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/login" className={({isActive}) => isActive ? activeClass : undefined} onClick={() => setMenuOpen(false)}>Login</NavLink></li>
              <li><NavLink to="/register" className={({isActive}) => isActive ? activeClass : undefined} onClick={() => setMenuOpen(false)}>Register</NavLink></li>
            </ul>
          )}
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl font-bold md:hidden">
          LinkUp
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <Link to="/" className="btn btn-ghost normal-case text-xl font-bold mr-8">
          LinkUp
        </Link>
        <ul className="menu menu-horizontal px-1 gap-4">
          <li><NavLink to="/" className={({isActive}) => isActive ? activeClass : undefined}>Home</NavLink></li>
          <li><NavLink to="/login" className={({isActive}) => isActive ? activeClass : undefined}>Login</NavLink></li>
          <li><NavLink to="/register" className={({isActive}) => isActive ? activeClass : undefined}>Register</NavLink></li>
        </ul>
      </div>

      <div className="navbar-end hidden md:flex">
        <button className="btn btn-ghost btn-circle">
          {/* search icon */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
