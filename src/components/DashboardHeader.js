import React from 'react';
import './dashboard.css';
import { User } from 'lucide-react';

const DashboardHeader = () => (
  <div className="flex justify-between items-center mb-8">
    <div>
      <h1 className="text-2xl font-semibold">Dashboard Overview</h1>
      <p className="text-gray-600">Welcome back, Admin</p>
    </div>
    <div className="flex items-center space-x-4">
      <button className="p-2 rounded-full bg-gray-100">
        <User className="h-5 w-5 text-gray-600" />
      </button>
    </div>
  </div>
);

export default DashboardHeader;
