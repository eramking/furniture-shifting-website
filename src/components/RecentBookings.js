import React from 'react';
import './dashboard.css';
import { Edit2, ChevronRight } from 'lucide-react';

const RecentBookings = ({ bookings }) => (
  <div className="bg-white rounded-lg shadow-sm mb-8">
    <div className="p-6 border-b border-gray-200">
      <h2 className="text-lg font-semibold">Recent Bookings</h2>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Booking ID</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">User</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td className="px-6 py-4 text-sm font-medium text-gray-900">{booking.id}</td>
              <td className="px-6 py-4">
                <div className="flex items-center">
                  <img src={booking.user.avatar} alt="" className="h-8 w-8 rounded-full" />
                  <span className="ml-2 text-sm text-gray-900">{booking.user.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">{booking.location}</td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 text-xs rounded-full ${
                  booking.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {booking.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm text-gray-900">${booking.amount}</td>
              <td className="px-6 py-4 text-sm text-gray-500">
                <div className="flex space-x-2">
                  <button className="p-1 hover:text-blue-600"><Edit2 className="h-4 w-4" /></button>
                  <button className="p-1 hover:text-blue-600"><ChevronRight className="h-4 w-4" /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default RecentBookings;
