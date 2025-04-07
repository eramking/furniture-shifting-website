import React from 'react';
import './dashboard.css';

const UserActivity = ({ activities }) => (
  <div className="bg-white rounded-lg shadow-sm">
    <div className="p-6 border-b border-gray-200">
      <h2 className="text-lg font-semibold">User Activity</h2>
    </div>
    <div className="p-6">
      <div className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-start space-x-3">
            <img src={activity.user.avatar} alt="" className="h-8 w-8 rounded-full" />
            <div className="flex-1">
              <p className="text-sm font-medium">{activity.user.name}</p>
              <p className="text-sm text-gray-600">{activity.action}</p>
            </div>
            <span className="text-sm text-gray-500">{activity.time}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default UserActivity;
