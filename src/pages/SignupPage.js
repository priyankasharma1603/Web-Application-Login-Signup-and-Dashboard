import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      navigate('/login');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-400 to-cyan-900 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold">Username</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 ease-in-out transform hover:shadow-lg"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold">Email</label>
            <input
              type="email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 ease-in-out transform hover:shadow-lg"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold">Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 ease-in-out transform hover:shadow-lg"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-800 font-semibold">Confirm Password</label>
            <input
              type="password"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-300 ease-in-out transform hover:shadow-lg"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 flex justify-between items-center">
            <h1>Already have an account?<a href="/login" className="text-teal-600 hover:underline transition duration-300 ease-in-out" style={{"marginLeft":"150px"}}>Login</a></h1>
          </div>
          <button
            type="submit"
            className="w-full bg-teal-500 text-white p-3 rounded-md shadow-md hover:bg-teal-600 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
