import React from 'react';
import { Phone, Mail } from 'lucide-react';
import './booking.css';

const BookingFooter = () => (
  <footer className="booking-footer">
    <div className="footer-columns">
      <div>
        <h3>About MoveEase</h3>
        <p>Professional furniture moving service ensuring safe and timely delivery.</p>
      </div>
      <div>
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Services</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div>
        <h3>Contact Us</h3>
        <p><Phone /> (555) 123-4567</p>
        <p><Mail /> support@moveease.com</p>
      </div>
    </div>
    <div className="footer-bottom">
      © 2025 MoveEase. All rights reserved.
    </div>
  </footer>
);

export default BookingFooter;
