import React from 'react';
import DashboardSidebar from '../components/DashboardSidebar';
import DashboardHeader from '../components/DashboardHeader';
import DashboardStats from '../components/DashboardStats';
import RecentBookings from '../components/RecentBookings';
import UserActivity from '../components/UserActivity';
import '../components/dashboard.css';


const bookings = [
  {
    id: '#1234',
    user: { name: 'Sarah Johnson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100' },
    location: 'New York, NY',
    status: 'Active',
    amount: 350
  },
  {
    id: '#1235',
    user: { name: 'Mike Smith', avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100' },
    location: 'Los Angeles, CA',
    status: 'Pending',
    amount: 275
  }
];

const activities = [
  {
    id: '1',
    user: { name: 'Emma Wilson', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100' },
    action: 'New booking in San Francisco',
    time: '2 mins ago'
  },
  {
    id: '2',
    user: { name: 'John Davis', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100' },
    action: 'Updated profile information',
    time: '15 mins ago'
  },
  {
    id: '3',
    user: { name: 'Lisa Anderson', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100' },
    action: 'Left a review for #1234',
    time: '1 hour ago'
  }
];

const DashboardPage = () => (
  <div className="flex h-screen bg-gray-50">
    <DashboardSidebar />
    <div className="flex-1 overflow-auto p-8">
      <DashboardHeader />
      <DashboardStats />
      <RecentBookings bookings={bookings} />
      <UserActivity activities={activities} />
    </div>
  </div>
);

export default DashboardPage;
