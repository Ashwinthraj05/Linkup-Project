// src/components/GetStartedButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const GetStartedButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/explore-projects'); // or your actual dashboard route
    } else {
      navigate('/login');
    }
  };

  return (
    <button onClick={handleClick} className="btn btn-primary">
      Get Started
    </button>
  );
};

export default GetStartedButton;
