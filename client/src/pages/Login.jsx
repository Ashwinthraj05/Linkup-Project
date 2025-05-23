// src/pages/Login.jsx
import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl dark:bg-base-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Welcome Back 👋</h2>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">Login to your LinkUp account</p>

        <form className="space-y-4">
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
            <input type="password" placeholder="••••••••" className="input input-bordered w-full" />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-blue-500">Forgot password?</a>
            </label>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full hover:scale-[1.02] transition">Login</button>
          </div>

          <p className="text-sm text-center text-gray-500 mt-2">
            Don’t have an account? <a href="/register" className="text-blue-500 font-medium">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
