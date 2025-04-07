import React from 'react';
import './dashboard.css';

const stats = [
  { label: 'Total Bookings', value: '1,234', subtext: '+12.5% from last month' },
  { label: 'Active Users', value: '856', subtext: '+5.4% this month' },
  { label: 'Total Revenue', value: '$45,678', subtext: '+8.2% from last month' },
  { label: 'Avg. Booking Value', value: '$250', subtext: '+2.1% this month' }
];

const DashboardStats = () => (
  <div className="grid grid-cols-4 gap-6 mb-8">
    {stats.map((stat, index) => (
      <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
        <h3 className="text-sm font-medium text-gray-600">{stat.label}</h3>
        <p className="text-2xl font-semibold mt-2">{stat.value}</p>
        <p className="text-sm text-green-600 mt-1">{stat.subtext}</p>
      </div>
    ))}
  </div>
);

export default DashboardStats;
