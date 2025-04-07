import React from 'react';
import './booking.css';

const BookingSummary = ({ handleReset }) => (
  <section className="booking-summary">
    <div className="summary-info">
      <span>Estimated Total</span>
      <span className="price">$299</span>
    </div>
    <div className="summary-buttons">
      <button onClick={handleReset} className="btn-reset">Reset Form</button>
      <button className="btn-confirm">Confirm Booking</button>
    </div>
  </section>
);

export default BookingSummary;
