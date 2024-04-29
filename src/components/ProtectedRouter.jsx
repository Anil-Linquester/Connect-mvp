// src/components/ProtectedRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import UserStore from '../Store/UserStore';// Path to your user store

const ProtectedRouter = ({ children }) => {
  const user = UserStore(state => state.user);
  
  if (!user) {
    // User not logged in, redirect to login page
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRouter;
