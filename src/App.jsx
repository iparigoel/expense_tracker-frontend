import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login';
import SignUp from './pages/Auth/SignUp';
import Home from './pages/Dashboard/Home';
import Expenses from './pages/Dashboard/Expenses';
import Income from './pages/Dashboard/Income';
import UserProvider from './context/UserContext.jsx';
import { Toaster } from 'react-hot-toast';

const Root = () => {
  const isAuthenticated = !!localStorage.getItem("token");
  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
};

const App = () => {
  return (
    <UserProvider>
      <div className=''>
        <Router>
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signUp" exact element={<SignUp />} />
            <Route path="/dashboard" exact element={<Home />} />
            <Route path="/expense" exact element={<Expenses />} />
            <Route path="/income" exact element={<Income />} />
          </Routes>
        </Router>
      </div>
      <Toaster
        toastOptions={{
          className:"",
          style:{
            fontSize:'13px'
          },
        }}
      />
    </UserProvider>
  );
};


export default App;