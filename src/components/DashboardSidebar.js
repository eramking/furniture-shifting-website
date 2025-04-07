import React from 'react';
import './dashboard.css';
import {
  LayoutDashboard, Package, Truck, CreditCard,
  History, Settings
} from 'lucide-react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: true },
  { icon: Package, label: 'Bookings' },
  { icon: Truck, label: 'Fleet' },
  { icon: CreditCard, label: 'Pricing' },
  { icon: History, label: 'Reports' },
  { icon: Settings, label: 'Settings' }
];

const DashboardSidebar = () => (
  <div className="w-64 bg-white border-r border-gray-200 p-4">
    <div className="flex items-center space-x-2 mb-8">
      <Truck className="h-6 w-6 text-blue-600" />
      <span className="text-xl font-semibold">PayRent</span>
    </div>
    <nav className="space-y-1">
      {navItems.map((item) => (
        <a
          key={item.label}
          href="#"
          className={`flex items-center space-x-3 px-3 py-2 rounded-lg ${
            item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50'
          }`}
        >
          <item.icon className="h-5 w-5" />
          <span>{item.label}</span>
        </a>
      ))}
    </nav>
  </div>
);

export default DashboardSidebar;
