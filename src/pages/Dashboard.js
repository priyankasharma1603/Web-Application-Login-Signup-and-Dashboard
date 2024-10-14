import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-blue-600 to-blue-800 text-white flex flex-col">
        <div className="p-6 text-3xl font-bold animate-pulse">
          MyApp
        </div>
        <nav className="mt-4 flex-1">
          <a href="#" className="block py-3 px-6 bg-blue-700 hover:bg-blue-900 transition-all duration-300 ease-in-out transform hover:scale-105 rounded-md mb-2">Dashboard</a>
          <a href="#" className="block py-3 px-6 hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 rounded-md mb-2">Profile</a>
          <a href="#" className="block py-3 px-6 hover:bg-blue-700 transition-all duration-300 ease-in-out transform hover:scale-105 rounded-md mb-2">Settings</a>
        </nav>
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white w-full py-2 rounded-md transition-all duration-300 ease-in-out hover:bg-red-900 transform hover:scale-105"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-50">
        {/* Header */}
        <header className="flex items-center justify-between mb-8 bg-white p-6 rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800">Dashboard</h1>
          <div>
          </div>
        </header>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out hover:shadow-2xl">
            <h2 className="text-2xl font-semibold mb-4">Welcome to the Dashboard!</h2>
            <p className="text-gray-700">Manage your account, view analytics, and more.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out hover:shadow-2xl">
            <h2 className="text-2xl font-semibold mb-4">Latest Updates</h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Feature A updated</li>
              <li>New analytics report available</li>
              <li>Check out our latest offers!</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out hover:shadow-2xl">
            <h2 className="text-2xl font-semibold mb-4">User Analytics</h2>
            <p className="text-gray-700">Track your performance and statistics in real time.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
