import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Homepage from '../pages/Homepage';
import Login from '../pages/login';

const router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default router;
