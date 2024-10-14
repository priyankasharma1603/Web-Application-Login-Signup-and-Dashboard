import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate('/dashboard');
    } else {
      alert('Please enter valid credentials.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-pink-900 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-6">
            <label className="block text-gray-800 font-semibold mb-1">Email or Username</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 transition duration-300 ease-in-out transform hover:shadow-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-800 font-semibold mb-1">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-600 transition duration-300 ease-in-out transform hover:shadow-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 flex justify-between items-center">
            <a href="#" className="text-indigo-600 hover:underline transition duration-300 ease-in-out">Forgot Password?</a>
            <a href="/signup" className="text-pink-600 hover:underline transition duration-300 ease-in-out">Sign up</a>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-3 rounded-md shadow-md hover:bg-pink-600 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
