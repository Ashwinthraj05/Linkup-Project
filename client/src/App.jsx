// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';  // added
import Profile from './pages/Profile';      // added

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />  {/* added */}
        <Route path="/profile" element={<Profile />} />      {/* added */}
      </Routes>
    </MainLayout>
  );
}

export default App;
