import React from 'react';
import { Truck } from 'lucide-react';
import './booking.css';

const BookingHeader = () => (
  <header className="booking-header">
    <div className="booking-header-inner">
      <div className="booking-logo">
        <Truck className="icon" />
        <span>MoveEase</span>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#" className="active">Book Now</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default BookingHeader;
