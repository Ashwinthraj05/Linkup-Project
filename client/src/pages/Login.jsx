
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromRegister = location.state?.fromRegister;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (data.success) {
        // Optional: Save token to localStorage
        localStorage.setItem('token', data.token);
        // Navigate to home or dashboard
        navigate('/home'); // or '/dashboard'
      } else {
        setError(data.message || 'Login failed. Check your credentials.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl dark:bg-base-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Welcome Back 👋</h2>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">Login to your LinkUp account</p>

        {fromRegister && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-sm text-center">
            Registration successful! Please login.
          </div>
        )}

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium text-gray-700 dark:text-gray-300">Email</span>
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className="input input-bordered w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium text-gray-700 dark:text-gray-300">Password</span>
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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
