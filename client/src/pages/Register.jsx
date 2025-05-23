// src/pages/Register.jsx
import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl dark:bg-base-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Create Your Account</h2>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">Sign up for a new LinkUp account</p>

        <form className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium text-gray-700 dark:text-gray-300">Name</span>
            </label>
            <input type="text" placeholder="Your full name" className="input input-bordered w-full" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium text-gray-700 dark:text-gray-300">Email</span>
            </label>
            <input type="email" placeholder="you@email.com" className="input input-bordered w-full" />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium text-gray-700 dark:text-gray-300">Password</span>
            </label>
            <input type="password" placeholder="Create a password" className="input input-bordered w-full" />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full hover:scale-[1.02] transition">Register</button>
          </div>

          <p className="text-sm text-center text-gray-500 mt-2">
            Already have an account? <a href="/login" className="text-blue-500 font-medium">Login</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
