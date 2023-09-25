import { Routes, Route, Navigate } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login';
import './styles/app.css';
import Register from './pages/Register';

function App() {
  return (
    <Routes>
      <Route path="/login" element={ <Login /> } />
      <Route path="/register" element={ <Register /> } />
      <Route exact path="/" element={ <Navigate to="/login" /> } />
    </Routes>
      
  );
}

export default App;
