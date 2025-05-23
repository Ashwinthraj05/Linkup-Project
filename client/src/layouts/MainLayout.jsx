// src/layouts/MainLayout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <nav className="navbar bg-gray-800 text-white shadow-md px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">LinkUp</Link>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/login" className="hover:underline">Login</Link>
          <Link to="/register" className="hover:underline">Register</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/profile" className="hover:underline">Profile</Link>
        </div>
      </nav>

      {/* Page Content */}
      <main className="flex-grow p-6">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-center py-4 text-sm">
        &copy; 2025 LinkUp. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;
