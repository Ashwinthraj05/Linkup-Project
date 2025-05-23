// src/pages/Register.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would do your registration logic (API call etc.)
    // For demo, just simulate success and redirect:
    console.log('User registered:', formData);

    // Redirect to login and pass a state message
    navigate('/login', { state: { fromRegister: true } });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-2xl shadow-xl dark:bg-base-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white">Create Your Account</h2>
        <p className="text-center text-sm text-gray-500 dark:text-gray-400">Sign up for a new LinkUp account</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium text-gray-700 dark:text-gray-300">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              className="input input-bordered w-full"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium text-gray-700 dark:text-gray-300">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@email.com"
              className="input input-bordered w-full"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-base font-medium text-gray-700 dark:text-gray-300">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="input input-bordered w-full"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full hover:scale-[1.02] transition">
              Register
            </button>
          </div>

          <p className="text-sm text-center text-gray-500 mt-2">
            Already have an account? <Link to="/login" className="text-blue-500 font-medium">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
